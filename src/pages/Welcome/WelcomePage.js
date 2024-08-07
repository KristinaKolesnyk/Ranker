import React from 'react';
import './WelcomePage.css';
import Navigation from '../../components/Navigation/Navigation';
import SearchBox from '../../components/SearchBox';
import Scroll from '../../components/Scroll';
import CardList from '../../components/Cards/CardList';
import {useNavigate} from "react-router-dom";


class WelcomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            searchField: '',
            error: null
        }
    }

    componentDidMount() {
        const {user} = this.props;
        if (user.id) {
            this.fetchCategories(user.id);
        }
    }

    fetchCategories = (userId) => {
        fetch(`http://localhost:3000/categories/${userId}`)
            .then(response => response.json())
            .then(categories => {
                if (Array.isArray(categories)) {
                    this.setState({categories});
                } else {
                    this.setState({error: 'Categories data is not an array'});
                    console.error('Categories data is not an array', categories);
                }
            })
            .catch(err => {
                console.log('Error fetching categories', err);
                this.setState({error: 'Error fetching categories'})
            })
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    handleDeleteCategory = (id) => {
        fetch(`http://localhost:3000/category/${id}`, {
            method: 'DELETE',
        }).then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete category');
            }
            return response.json()
        })
            .then(() => {
                this.setState(prevState => ({
                    categories: prevState.categories.filter(category => category.id !== id)
                }))
            }).catch(err => {
            console.error('Error deleting category', err);
            this.setState({error: 'Error deleting'})
        })
    }

    render() {
        const {categories, searchField} = this.state;
        const {isSignedIn, signOut, user} = this.props;
        const navigate = this.props.navigate;

        const filteredCategories = categories.filter(category => {
            return category.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return (
            <div className='WelcomePage'>
                <div className='header-text'>
                    <h1 className='f-headline washed-yellow '>The Ranker</h1>
                    <Navigation isSignedIn={isSignedIn} signOut={signOut}/>
                </div>

                <div className='header-text'>
                    {user.name ?
                        <h2 className='washed-yellow'>{user.name}, We Make Decisions Easy for You</h2>
                        : <h2 className='washed-yellow'>Where Decisions Become Easy</h2>
                    }
                </div>

                <div className='tc'><h1>Categories</h1></div>

                <div className='tc'>
                    <div><SearchBox searchChange={this.onSearchChange}/></div>
                    <Scroll>
                        <div className='space'>
                            <div className='category-container'>
                                <CardList categories={filteredCategories} navigate={navigate} onDelete ={this.handleDeleteCategory}/>
                            </div>
                        </div>
                    </Scroll>
                </div>
            </div>
        );
    }
}

export default function WelcomePageWrapper(props) {
    const navigate = useNavigate();
    return <WelcomePage {...props} navigate={navigate}/>
}