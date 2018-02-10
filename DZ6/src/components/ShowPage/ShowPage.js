import React, {Component} from 'react';
import {showRequest} from '../../actions';
import {getIsFetching, getEntities} from '../../reducers/shows';
import {connect} from 'react-redux';
import './ShowPage.css';

const ShowPersons = ({name, image}) => 
    <div className='t-person'>
        <p>{name}</p>
        <img src={image} alt={name}/>
    </div>

class ShowPage extends Component {
    static mapStateToProps = state => ({
        isFetching: getIsFetching(state),
        entities: getEntities(state)
    })

    componentDidMount() {
        const {params} = this.props.match;
   
        this.props.showRequest(params.id);
    }

    render() {
        const {isFetching, entities} = this.props;
        const showInfo = entities.length > 0 ? entities[0] : {};
        const castInfo = showInfo._embedded && showInfo._embedded.cast;

        if (isFetching) {
            return (
                <div>Загрузка...</div>
            );
        }
        return (
            <div className='show-info'>
                <div className='show'>
                    <h3>{showInfo.name}</h3>
                    {showInfo.image &&
                        <img src={showInfo.image.medium} alt={showInfo.name}/>}
                    <div dangerouslySetInnerHTML={{__html: showInfo.summary}}/>
                </div>     

                {castInfo && 
                    <div className='show-persons'>
                        {castInfo.map((item) => {
                            const {person} = item;

                            return (
                            <ShowPersons
                                name={person.name}
                                image={person.image.medium}
                            />)   
                        })}
                    </div>} 
            </div>
        );
    }
}

export default connect(ShowPage.mapStateToProps, {showRequest})(ShowPage);
