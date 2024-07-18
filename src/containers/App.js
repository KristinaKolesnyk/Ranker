import React from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import SearchBox from '../components/Navigation/SearchBox';
import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import AddButton from '../components/AddButton/AddButton';
import {categories} from "../categories";



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: categories,
            searchField: '',
            route: 'signin',
            isSignedIn: false
        }
    }

    onRouteChange = (route) => {
        if (route === 'logout') {
            this.setState({isSignedIn: false})
        } else if (route === 'home') {
            this.setState({isSignedIn: true})
        }
        this.setState({route: route});
    }

   /*componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(category => {
                this.setState({categories: category})
            });
    }*/


    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
        const {categories, isSignedIn, route, searchField} = this.state;

        // Filtering the categories based on the search input
        const filteredCategories = categories.filter(category => {
            return category.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return (
            <div className='App'>
                <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>

                {route === 'home' ?
                    <div className='tc'>
                        <div>
                            <div className='tl'>
                                <h1 className=' rankertext f1 washed-yellow bold'>The Ranker</h1>
                                <h2 className='rankertext washed-yellow'>Where Decisions Become Easy</h2>
                            </div>
                            <div>
                                <h1 className='f1'>LIST</h1>
                                <SearchBox searchChange={this.onSearchChange}/>
                            </div>
                            <Scroll>
                                <div className='tl rankertext'>
                                    <CardList categories={filteredCategories}/>
                                    <AddButton onRouteChange={this.onRouteChange}/>
                                </div>
                            </Scroll>
                        </div>

                    </div> : (route === 'signin'
                        ? <SignIn onRouteChange={this.onRouteChange}/>
                        : <SignUp onRouteChange={this.onRouteChange}/>)
                }
            </div>
        );
    }
}

export default App;
