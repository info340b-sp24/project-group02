import React from 'react';

function Card({activityDetails}) {
    const { date, activity, description, img, alt } = activityDetails;

    return (
        <div className="col-md-6 col-lg-3 d-flex sizing">
            <div className="card mb-4">
                <img className="card-img" src={img} alt={alt} />
                <div className="card-body">
                    <p className="card-subtitle text-success">{date}</p>
                    <h2 className="card-title m-0">{activity}</h2>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-dark">More Details</a>
                </div>
            </div>
        </div>
    )
}

export function CardList({activities}) {
    const cardList = activities.map((card) => {
        const element = <Card key={card.activity} activityDetails={card}/>
        return element;
    });

    return (
        <div className="row">
            {cardList}
        </div>
    )
}
