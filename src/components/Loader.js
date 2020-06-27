import React, {Component} from 'react';
import cls from './Loader.module.css'

class Loader extends Component {
    render() {
        return (
            <div className={cls.ldsRing}></div>
        );
    }
}

export default Loader;