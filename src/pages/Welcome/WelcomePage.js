import React from 'react';
import './WelcomePage.css';
import Navigation from '../../components/Navigation/Navigation';
import SearchBox from '../../components/SearchBox';
import Scroll from '../../components/Scroll';
import CardList from '../../components/Cards/CardList';
import {categories} from "../../categories";


class WelcomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: categories,
            searchField: '',
        }
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
        const {categories, searchField} = this.state;
        const {isSignedIn, signOut} = this.props;

        // Filtering the categories based on the search input
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
                    {this.props.user.name ?
                        <h2 className='washed-yellow'>{this.props.user.name}, We Make Decisions Easy for You</h2>
                        : <h2 className='washed-yellow'>Where Decisions Become Easy</h2>
                    }
                </div>

                <div className='tc'>
                    <h1>Categories</h1>
                </div>

                <div className='tc'>
                    <div>
                        <SearchBox searchChange={this.onSearchChange}/>
                    </div>
                    <Scroll>
                        <div className='category-container'>
                            {console.log(this.props.user.id)}
                            <CardList categories={filteredCategories}/>

                        </div>
                    </Scroll>
                </div>
            </div>
        );
    }
}

export default WelcomePage;