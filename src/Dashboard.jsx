import React from 'react';
import Review from './Review';

class Dashboard extends React.Component {

    constructor(props) {
        super(props)
        this.state = { reviews: [], appId: '333903271' }
    }
    requestReviews() {
        let url = "http://itunes.apple.com/rss/customerreviews/page=" + 1 + "/id=" + this.state.appId + "/sortby=mostrecent/json?cc=" + "us";
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(
                result => {
                    let reviews = result.feed.entry;
                    console.log(reviews)
                    this.setState({ reviews });
                },
                error => {
                    console.log(error);

                }
            );


    }
    render() {
        const { reviews, appId } = this.state;
        return (
            <div className="container">
                <div className="row p-3">
                    <form className="w-100" onSubmit={e => {
                        e.preventDefault();
                        //call fetch reviews
                        this.requestReviews();
                    }}>
                        <div className="form-group">
                            <label htmlFor="appId">App ID</label>
                            <input type="text" className="form-control" id="appId" value={appId} onChange={e => this.setState({ appId: e.target.value })} />
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    {!reviews.length ? (<div className="row p-3">No Reviews</div>) :
                        (reviews.map(review => (
                            <Review key={review.id.appId} appId={appId} {...review} />
                        )))
                    }
                </div>
            </div>
        );
    }

}

export default Dashboard;