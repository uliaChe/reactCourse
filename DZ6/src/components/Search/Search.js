import React, {Component} from 'react';
import {searchRequest} from '../../actions';
import {Link} from 'react-router-dom';
import {getIsFetching, getSearchResult, getError} from '../../reducers/search';
import {connect} from 'react-redux';
import './Search.css';

const ShowInfo = (props) => {
    const {id, title, image, text} = props;

    return (
        <div className='t-preview'>
            <h3>
                <Link to={`/shows/${id}`} className='t-link'>{title}</Link>
            </h3>
            <div className='show-img'>
                <img src={image} alt={title}/>
            </div>
            <div className='show-descr' dangerouslySetInnerHTML={{__html: text}}/>
        </div>
    );
}

class Search extends Component {
    state = {
        searchValue: ''
    }

    static mapStateToProps = state => ({
        isFetching: getIsFetching(state),
        error: getError(state),
        result: getSearchResult(state)
    })

    handleInput = (e) => {
        this.setState({searchValue: e.target.value})
    }

    handleSearch = () => {
        this.props.searchRequest(this.state.searchValue);
    }

    render() {
        const {isFetching, error, result} = this.props;
        
        if (isFetching) {
            return (
                <div className='search-form'>Выполняется поиск...</div>
            );
        }

        return (
            <div>
                <div className='search-form'>
                    <input type='text'
                        value={this.state.searchValue}
                        onChange={this.handleInput}/>
                    <button type='button'
                        onClick={this.handleSearch}>
                        Найти
                    </button>
                </div>
                
                {error && <div>{error}</div>}

                {result.length > 0 &&
                    <div className='t-search-result'>
                        {result.map((item) => 
                            <ShowInfo
                                key={item.id}
                                id={item.id}
                                image={item.image.medium}
                                title={item.name}
                                text={item.summary}
                            /> 
                        )}
                    </div>
                }
            </div>
        );
    }
}

export default connect(Search.mapStateToProps, {searchRequest})(Search);
