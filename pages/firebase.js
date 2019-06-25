import React from 'react';
import * as firebase from 'firebase/app';
import "firebase/auth";
import "firebase/storage";
import Header from '../components/Header';
import XMLHttpRequest from 'xhr2';
import 'isomorphic-unfetch';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class FireabsePage extends React.Component {
    static async getInitialProps({ req }) {
        global.XMLHttpRequest = XMLHttpRequest;

        //  init firebase 
        const config = {
            apiKey: "AIzaSyBbDauwPSmm6yhnI7sAHQLlo9VM21LFOGI",
            authDomain: "zhjt02.firebaseapp.com",
            databaseURL: "https://zhjt02.firebaseio.com",
            projectId: "zhjt02",
            storageBucket: "zhjt02.appspot.com",
            messagingSenderId: "879181961220",
            appId: "1:879181961220:web:56f94fde91120c39"
        }
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
        const storageRef = firebase.storage().ref("default");
        const downloadURL = await storageRef.child("76019.jpg").getDownloadURL();
            // const blobURL = URL.createObjectURL(resBlob);
        // console.log(blobURL);
        // storageRef.child("76019.jpg").getDownloadURL().then((url)=>{
            // console.log(url);
        // })

        return { downloadURL:downloadURL }
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="root">
                <Header headName="Firebase + Next.js" />
                <div style={{ paddingTop:70}}>
                <Paper style={{width:"100%",height:600}}>
                    <Typography component="p"  style={{margin:20,padding:10}}>
                        { this.props.downloadURL }
                    </Typography>
                    <img src={this.props.downloadURL} alt={this.props.downloadURL} />
                </Paper>
                </div>
            </div>

        );
    }
}

export default FireabsePage;