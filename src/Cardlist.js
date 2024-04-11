import React from 'react';
import Card from './Card';

const Cardlist = ({ robots }) => {
    const cardComponent = robots.map((user, i) => {
        return (
            <Card
                //key={i}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
            />
        );
    });
    return (
        <div>
            {cardComponent}
            {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
            <Card id={robots[8].id} name={robots[1].name} email={robots[1].email} />
            <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
            <Card id={robots[3].id} name={robots[3].name} email={robots[3].email} />
            <Card id={robots[5].id} name={robots[5].name} email={robots[5].email} />
            <Card id={robots[6].id} name={robots[6].name} email={robots[6].email} />
            <Card id={robots[7].id} name={robots[8].name} email={robots[8].email} /> */}
        </div>
    );
}

export default Cardlist;