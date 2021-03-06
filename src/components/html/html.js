import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import config from '../../configs/config'
import './html.styl'
import withViewport from '../../decorators/withViewport'

@withViewport
export default class HTML extends Component {

    static propTypes = {};

    static defaultProps = {};

    state = {};

    constructor(props) {
        super(props);
    }

    render() {
        let title = "";
        let description = "";
        if (React.Children.only(this.props.children).props.head) {
            let head = React.Children.only(this.props.children).props.head;
            title = head.title || "";
            description = head.description || head.title;
        }
        let style = {
            margin: 0,
            padding: 0,
            fontFamily: ['sans-serif', 'Helvetica', 'Arial'],
            fontSize: '14px'
        };
        return (
            <html>
                <head>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </head>
                <body style={style}>
                    <div style={{height: '30%', minHeight: '300px', backgroundColor: '#eee'}}>
                        <div style={{maxWidth: '1600px', margin: '0 auto'}}>
                            <nav>
                                <Link to="/">Home</Link>
                                <br />
                                <Link to="error">Error</Link>
                            </nav>
                        </div>
                    </div>
                    <div style={{maxWidth: '1600px', margin: '0 auto'}}>
                        {this.props.children}
                    </div>
                    <script src={config.env === "dev" ? config.webpack.url + '/static/bundle.js' : 'static/bundle.js'}></script>
                </body>
            </html>
        );
    }

}