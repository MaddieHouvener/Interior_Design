import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default props => {

    // const [picture, setPicture] = useState('');


    return (
        <div>
            <h2 className="topic">Projects</h2>
            <Container>
                <Row>
                    <Col>
                        <a href="/projects/edmonds"><img className="projectImg" src="https://images.squarespace-cdn.com/content/v1/54c04d65e4b0dc084d050a03/1449798409308-1DTRK7NW6XILQNMS6BEY/ke17ZwdGBToddI8pDm48kGP2kDL8laIfNDTHnzBPhyB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0oGwQPSn8VqSSM4mc7rOnog_kMeh2Z3cO4QouP5z7x2-_sMrpUSLM7UVwWjxIUxHdw/joki+sally+clark-5112.jpg?format=2500w" alt="design"></img></a>
                        <p className="text">Edmonds Remodel Project</p>
                    </Col>
                    <Col>
                        <a href="/projects/snohomish"><img className="projectImg" src="https://images.squarespace-cdn.com/content/v1/54c04d65e4b0dc084d050a03/1449798933813-3GLV5J57JG075I12N7OE/ke17ZwdGBToddI8pDm48kO7Rg1Gpu728H4UqxUIfecJZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PICj5SdZHY9KUswDgTH3eH8sP5PrkY15Dr7CE2CPSRiTEKMshLAGzx4R3EDFOm1kBS/Parsons-7.jpg?format=2500w" alt="design"></img></a>
                        <p className="text">Snohomish Project</p>
                    </Col>
                    <Col>
                        <a href="/projects/fridayharbor"><img className="projectImg" src="https://images.squarespace-cdn.com/content/v1/54c04d65e4b0dc084d050a03/1455683817797-R51MIE7TK4YV1HB89GZR/ke17ZwdGBToddI8pDm48kF-41thsXfkN6jG729pKnnR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UV16KzquAtwGBN5565bKqD-Z8ImJ0YNQ40t_CUv5VFxR5EtI5Goe07L9gp59RZWOsQ/Den+1.jpg?format=2500w" alt="design"></img></a>
                        <p className="text">Friday Harbor Beauty Project</p>
                    </Col>
                    <Col>
                        <a href="/projects/fridayharbor"><img className="projectImg" src="bathroomSink.png"></img></a>
                        <p className="text">Friday Harbor Beauty Project</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}