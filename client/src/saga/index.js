import {authWatcher} from './authSaga';

export default function* rootWatchers(){
    yield[
        authWatcher()
    ]
}