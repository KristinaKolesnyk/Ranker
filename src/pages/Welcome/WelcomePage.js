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
                this.setState({error: 'Error fetching categories'});
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
            this.setState({error: 'Error deleting'});
        })
    }

    render() {
        const {categories, searchField} = this.state;
        const {isSignedIn, signOut, user} = this.props;
        const navigate = this.props.navigate;

        const filteredCategories = categories.filter(category => {
            return category.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return (
            <div className='app-container'>
                <header className='header-text'>
                    <h1 className='f-headline washed-yellow'>The Ranker</h1>
                    <Navigation isSignedIn={isSignedIn} signOut={signOut}/>
                </header>

                <main className='main-content'>
                    <section className='intro-section'>
                        {isSignedIn && user.id ? (
                            <>
                                <div className='pad-left'>
                                    <h2 className='washed-yellow'>{user.name}, We Make Decision Making Easy for You</h2>
                                </div>
                                <div className='tc'>
                                    <h1>Categories</h1>
                                    <div>
                                        <SearchBox searchChange={this.onSearchChange}/>
                                    </div>
                                    <Scroll>
                                        <div className='space'>
                                            <div className='category-container'>
                                                <CardList
                                                    categories={filteredCategories}
                                                    navigate={navigate}
                                                    onDelete={this.handleDeleteCategory}
                                                />
                                            </div>
                                        </div>
                                    </Scroll>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='pad-left'>
                                    <h2 className='washed-yellow'>Where Decisions Become Easy</h2>
                                    <p className='intro-text'>
                                        Join us to create and rank lists, making choices easier in all aspects of life.
                                    </p>
                                </div>
                                <section className='features-section'>
                                    <div className='tc'>
                                        <h1 className='features-title'>Site Features</h1>
                                    </div>

                                    <div className='features-list'>
                                        <div className='feature-item'>
                                            <h4 className='f3'>Create Personalized Lists</h4>
                                            <p>Effortlessly create customized lists for anything that matters to you —
                                                from your favorite movies and must-read books to daily to-do’s and more.
                                                Ranker helps you organize your thoughts and priorities with ease.</p>
                                        </div>
                                        <div className='feature-item'>
                                            <h4 className='f3'>Compete in Interactive Tournaments</h4>
                                            <p>Have fun while making decisions! Use our interactive tournaments to
                                                compare your items head-to-head and let Ranker guide you to the best
                                                choice, all through an engaging and dynamic experience.</p>
                                        </div>
                                        <div className='feature-item'>
                                            <h4 className='f3'>Rank Items with Smart Algorithms</h4>
                                            <p>Rank your items based on criteria that matter to you. Our smart ranking
                                                algorithms give you insightful, data-driven rankings that reflect your
                                                preferences and help you see your top choices more clearly.</p>
                                        </div>
                                        <div className='feature-item'>
                                            <h4 className='f3'>Smooth and Enjoyable Experience</h4>
                                            <p>From start to finish, Ranker provides a seamless and intuitive
                                                experience. Whether you’re ranking for fun or making important
                                                decisions, our user-friendly design ensures that your time on the
                                                platform is enjoyable and productive.</p>
                                        </div>
                                    </div>
                                </section>
                            </>
                        )}
                    </section>
                </main>

                <footer className='footer'>
                    <p>© 2024 The Ranker. All rights reserved.</p>
                </footer>
            </div>
        );
    }
}

export default function WelcomePageWrapper(props) {
    const navigate = useNavigate();
    return <WelcomePage {...props} navigate={navigate}/>;
}

