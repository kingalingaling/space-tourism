function NotFound() {

    return (
        <section>
            <p>This page doesn't exist on this website</p>
            <p>You probably meant to visit one of these pages:</p>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/destination">Destination</a></li>
                <li><a href="/crew">Crew</a></li>
                <li><a href="/technology">Technology</a></li>
            </ul>
        </section>
    )
}
  
export default NotFound