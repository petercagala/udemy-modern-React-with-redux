import React from 'react';
import {connect} from 'react-redux';
import {StoreState} from '../reducers/index';


interface Page1Props {

}

interface Page1State {

}

class _Page1 extends React.Component<Page1Props, Page1State> {

    constructor(props: Page1Props, state: Page1State) {
        super(props);

        this.state = {}
    }


    render() {
        return (
            <div className="ui container">
                <h2>Page 1</h2>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState): {} => {
    return {};
}

export const Page1 = connect(
    mapStateToProps,
    {}
)(_Page1);
