import React from 'react';
import * as firebase from 'firebase/app';
import "firebase/auth";
import "firebase/storage";
import XMLHttpRequest from 'xhr2';

class FirebaseImagePage extends React.Component {
    static async getInitialProps({ pathname, req, res, query }) {
        const name = query.name;
        global.XMLHttpRequest = XMLHttpRequest;
        if (!firebase.apps.length) {
            const config = {
                apiKey: "AIzaSyBbDauwPSmm6yhnI7sAHQLlo9VM21LFOGI",
                authDomain: "zhjt02.firebaseapp.com",
                databaseURL: "https://zhjt02.firebaseio.com",
                projectId: "zhjt02",
                storageBucket: "zhjt02.appspot.com",
                messagingSenderId: "879181961220",
                appId: "1:879181961220:web:56f94fde91120c39"
            }
            firebase.initializeApp(config);

        }

        var request = require('request').defaults({ encoding: null });;
        const apiCall = () => {
            return new Promise((resolve, reject) => {
                request("https://helixcs.herokuapp.com/api/read/images/resize/name/nature-1510499378825-9667.jpg?ratio=0.4", function (error, response, body) {
                    if (error || response.statusCode != 200) {
                        reject(error)
                    }
                    const data = "data:" + response.headers["content-type"] + ";base64," + Buffer.from(body).toString('base64');
                    resolve(data);
                });

            })
        }

        const a = await apiCall();
        return { data: a }
    }

    render() {
        return (
            <img src={this.props.data} />
        )
    }

}

export default FirebaseImagePage;