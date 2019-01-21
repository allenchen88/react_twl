import React, {Component} from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class SearchResult extends Component{
    render() {
        const  { searchResult, toggleFavourite } = this.props;
        return (
            <div className="pt-4">
                { searchResult.map( (result,index) => <div key={index} className="row" >
                <div className="col-xs-6"><span className={`glyphicon glyphicon-star ${result.IsFavourite? "text-success":"text-secondary" }`} 
                                                onClick={()=>toggleFavourite(result.title)}>
                                        </span> {result.title}</div>
                <div className="col-xs-6">{ReactHtmlParser(ReactHtmlParser(result.body))}</div></div>) }
            </div>
            
        );
    }
}

export default SearchResult;