import React from 'react';
import {connect} from 'react-redux';
import {StoreState} from '../reducers/index';


interface Page2Props {

}

interface Page2State {

}

class _Page2 extends React.Component<Page2Props, Page2State> {

    constructor(props: Page2Props, state: Page2State) {
        super(props);

        this.state = {}
    }


    render() {
        return (
            <div className="ui container">
                <h2>Page 2</h2>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState): {} => {
    return {};
}

export const Page2 = connect(
    mapStateToProps,
    {}
)(_Page2);
