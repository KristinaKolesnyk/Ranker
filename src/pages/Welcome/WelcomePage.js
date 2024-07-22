import React from 'react';
import './WelcomePage.css';
import Navigation from '../../components/Navigation/Navigation';
import SearchBox from '../../components/SearchBox';
import Scroll from '../../components/Scroll';
import CardList from '../../components/Cards/CardList';
import AddButton from '../../components/AddButton/AddButton';
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
        const {isSignedIn} = this.props;

        // Filtering the categories based on the search input
        const filteredCategories = categories.filter(category => {
            return category.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return (
            <div className='WelcomePage'>
                <div className='flex justify-between items-center'>
                    <h1 className='rankertext f1 washed-yellow '>The Ranker</h1>
                    <Navigation isSignedIn={isSignedIn}/>
                </div>
                <h2 className='rankertext f3 washed-yellow'>Where Decisions Become Easy</h2>

                <div className='tc'>
                    <div>
                        <h1 className='f1'>LIST</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                    </div>
                    <Scroll>
                        <div className='tl rankertext'>
                            <CardList categories={filteredCategories}/>
                            <AddButton/>
                        </div>
                    </Scroll>
                </div>
            </div>
        );
    }
}

export default WelcomePage;

