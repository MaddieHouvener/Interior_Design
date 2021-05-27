import React from 'react'
import '../App.css';
import { SocialIcon } from 'react-social-icons';
// import { Container, Row, Col, Carousel, } from 'react-bootstrap';


export default props => {

    const images = [
        { id: 1, src: "https://images.squarespace-cdn.com/content/v1/54c04d65e4b0dc084d050a03/1449798190067-EXUZ3UPPYU1T6VIICKZO/ke17ZwdGBToddI8pDm48kFs8UFaRxr_Htf7e38QORY97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k9kZPbuygN4RSDPe_G5PO9R-hAgwPl8pa5EnQIZQQbpKwrCfKjRnoKa4J_Zk8yvtQ/joki+sally+clark-4899.jpg?format=500w", title: "kari", description: "livingRoom" },
        { id: 2, src: "https://images.squarespace-cdn.com/content/v1/54c04d65e4b0dc084d050a03/1449798188372-C3ZBQVWL3A3R49HKS1L4/ke17ZwdGBToddI8pDm48kGP2kDL8laIfNDTHnzBPhyB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0oGwQPSn8VqSSM4mc7rOnog_kMeh2Z3cO4QouP5z7x2-_sMrpUSLM7UVwWjxIUxHdw/joki+sally+clark-4912-2.jpg?format=2500w", title: "kari", description: "bathroom" },
        { id: 3, src: "https://images.squarespace-cdn.com/content/v1/54c04d65e4b0dc084d050a03/1449798188372-C3ZBQVWL3A3R49HKS1L4/ke17ZwdGBToddI8pDm48kGP2kDL8laIfNDTHnzBPhyB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0oGwQPSn8VqSSM4mc7rOnog_kMeh2Z3cO4QouP5z7x2-_sMrpUSLM7UVwWjxIUxHdw/joki+sally+clark-4912-2.jpg?format=2500w", title: "kari", description: "vertical" },
        { id: 4, src: "https://images.squarespace-cdn.com/content/v1/54c04d65e4b0dc084d050a03/1449798261742-GAAKNRG4WIAV6SH7952D/ke17ZwdGBToddI8pDm48kDrooBRtCvPEHRBjeZDkY7J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s2R59z2HWVKMNU9GXmUK4XeJu0ttRmCXIv4AW2YdCJ-osu2N_wHDwYCQa7x2YV76Q/joki+sally+clark-4954.jpg?format=2500w", title: "kari", description: "bathroom" },
        { id: 5, src: "https://images.squarespace-cdn.com/content/v1/54c04d65e4b0dc084d050a03/1449798399634-P4K8WB09QF01MKJNP09E/ke17ZwdGBToddI8pDm48kGP2kDL8laIfNDTHnzBPhyB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0oGwQPSn8VqSSM4mc7rOnog_kMeh2Z3cO4QouP5z7x2-_sMrpUSLM7UVwWjxIUxHdw/joki+sally+clark-5102.jpg?format=2500w", title: "kari", description: "bathroom" },
        { id: 6, src: "https://images.squarespace-cdn.com/content/v1/54c04d65e4b0dc084d050a03/1449798409308-1DTRK7NW6XILQNMS6BEY/ke17ZwdGBToddI8pDm48kGP2kDL8laIfNDTHnzBPhyB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0oGwQPSn8VqSSM4mc7rOnog_kMeh2Z3cO4QouP5z7x2-_sMrpUSLM7UVwWjxIUxHdw/joki+sally+clark-5112.jpg?format=2500w", title: "kari", description: "bathroom" },
        { id: 7, src: "https://images.squarespace-cdn.com/content/v1/54c04d65e4b0dc084d050a03/1449798223723-BO4UH1641EV3ELTRAPOJ/ke17ZwdGBToddI8pDm48kK6rS0NqAS9s6l2pb4P9ICt7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jAoOkRmPE63FUjiJOEKAz6Ty3Cki0jSwsGtXhnQf8bOwAdDi6tGkgb6T0ydgy6jeg/joki+sally+clark-4928.jpg?format=2500w", title: "kari", description: "bathroom" }

    ]
    console.log(images)

    return (
        <div className="App">
            <div class="topnav">
                <a class="active" href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
            </div>
            <div className="container">
                <div>
                    <h2 className="topic">Edmonds Remodel Project</h2>
                </div>
                {/* <Row>
                    <Col>
                    <img src="https://images.squarespace-cdn.com/content/v1/54c04d65e4b0dc084d050a03/1449798190067-EXUZ3UPPYU1T6VIICKZO/ke17ZwdGBToddI8pDm48kFs8UFaRxr_Htf7e38QORY97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k9kZPbuygN4RSDPe_G5PO9R-hAgwPl8pa5EnQIZQQbpKwrCfKjRnoKa4J_Zk8yvtQ/joki+sally+clark-4899.jpg?format=500w" alt="edmonds living room" />
                    </Col>
                    <Col>
                    <img style={{ height: "335px" }} src="https://images.squarespace-cdn.com/content/v1/54c04d65e4b0dc084d050a03/1449798188372-C3ZBQVWL3A3R49HKS1L4/ke17ZwdGBToddI8pDm48kGP2kDL8laIfNDTHnzBPhyB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0oGwQPSn8VqSSM4mc7rOnog_kMeh2Z3cO4QouP5z7x2-_sMrpUSLM7UVwWjxIUxHdw/joki+sally+clark-4912-2.jpg?format=2500w" alt="living room chairs" />
                    </Col>
                </Row> */}

                {images.map((image) => {
                    return <img style={{ height: "335px", padding: "20px" }} key={image.id} src={image.src} />
                })}


            </div>
            <div className="footer">
                <div className="socials">
                    <SocialIcon url="https://facebook.com/karijokidesign" />
                    <SocialIcon url="https://instagram.com/karjokidesign" />
                </div>
            </div>
        </div>
    )

}