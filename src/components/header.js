const Header = () => {
    return (
        <header>
            <h2 className="headlineSmallHeader">Hello There</h2>
            <h1 className="headlineHeader">We are Glint</h1>
            <p className="pHeader">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, suscipit. Aliquid dolores ut accusamus illo minus? Minima doloribus iure officia ipsa quo deleniti quae a, molestiae dolore architecto aliquid nesciunt excepturi tempora magnam optio. Sint adipisci aspernatur natus distinctio magnam consequuntur sequi corporis earum rem, repudiandae eum neque deserunt, eos tempore perferendis numquam quo, ducimus quidem corrupti laboriosam!</p>
            <div className="zahlenBlockHeader">
                <div>
                    <h3 className="numberHeader">127</h3>
                    <p className="descriptionNumber">Award Received</p>
                </div>
                <div>
                    <h3 className="numberHeader">1505</h3>
                    <p className="descriptionNumber">Cups of Coffee</p>
                </div>
                <div>
                    <h3 className="numberHeader">109</h3>
                    <p className="descriptionNumber">Projects Completed</p>
                </div>
                <div>
                    <h3 className="numberHeader">102</h3>
                    <p className="descriptionNumber">Happy Clients</p>
                </div>
            </div>
        </header>
    );
}

export default Header;