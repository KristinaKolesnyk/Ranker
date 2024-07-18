import React from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import SearchBox from '../components/Navigation/SearchBox';
import Signin from '../components/Signin/Signin';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: '',
            route: 'signin'
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({robots: users})
            });
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return (
            <div className='App'>

                <div className='tc'>
                    <div className='right'>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <Navigation/>
                    </div>
                    {this.state.route === 'signin'
                        ? <Signin/> :
                        <div>
                            <div className='tl'>
                                <h1 className='f1 washed-yellow bold'>The Ranker</h1>
                                <h2 className='washed-yellow'>Where Decisions Become Easy</h2>
                            </div>
                            <h1 className='tc f1 '>LIST</h1>
                            <Scroll>
                                <CardList robots={filteredRobots}/>
                            </Scroll>
                        </div>
                    }
                </div>

            </div>


        )
            ;
    }
}

export default App;
