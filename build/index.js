var person = {
    name: 'Lambda the Llama',
    location: 'Lima, Peru',
    occupation: {
        title: 'Looking everywhere for a good meal!',
        employer: 'the people'
    },
    photo: 'images/lama.jpg',
    updates: [{
        platform: 'twitter',
        status: 'Found some sweet alfalfa'
    }, {
        platform: 'twitter',
        status: 'Layin in the hay and chillin like a villain'
    }, {
        platform: 'facebook',
        status: 'I just spat on someone LOL!'
    }]
};

class Photo extends React.Component {
    render() {

        return React.createElement(
            'div',
            { className: 'photo' },
            React.createElement('img', { src: this.props.source, alt: 'Photo' })
        );
    }

}

class Bio extends React.Component {
    render() {

        return React.createElement(
            'div',
            { className: 'bio' },
            React.createElement(
                'h1',
                { className: 'name' },
                this.props.name
            ),
            React.createElement(
                'h2',
                { className: 'location' },
                this.props.location
            ),
            React.createElement(
                'div',
                { className: 'occupation' },
                React.createElement(
                    'p',
                    null,
                    this.props.occupation.title,
                    '. I work for ',
                    this.props.occupation.employer
                )
            )
        );
    }

}

class Updates extends React.Component {

    //updates function to loop through the updates array passed to this component.
    //react website states that an index is required when using map to that react can track dynamic data that is added and removed.
    //https://facebook.github.io/react/docs/lists-and-keys.html
    updates() {

        return this.props.updates.map(function (update, index) {

            return React.createElement(
                'li',
                { className: "update " + update.platform, key: index },
                update.status
            );
        });
    }

    render() {

        return React.createElement(
            'div',
            { className: 'updates' },
            React.createElement(
                'ul',
                null,
                this.updates()
            )
        );
    }
}

// Note that Component has capital C
// the entire updates array is passed to Updates component. It is the components job to loop through the individual updates
class Card extends React.Component {

    render() {

        return React.createElement(
            'div',
            { className: 'card' },
            React.createElement(Photo, { source: person.photo }),
            React.createElement(Bio, { name: person.name, location: person.location, occupation: person.occupation }),
            React.createElement(Updates, { updates: person.updates })
        );
    }
}

ReactDOM.render(React.createElement(Card, null), document.getElementById("app"));