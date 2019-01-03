function mapSelector() {
    if /* if we're on iOS, open in Apple Maps */
        ((navigator.platform.indexOf("iPhone") != -1) ||
        (navigator.platform.indexOf("iPad") != -1) ||
        (navigator.platform.indexOf("iPod") != -1))
        window.open("maps://www.google.com/maps/place/460+Polaris+Pkwy+%23150,+Westerville,+OH+43082/@40.147438,-82.9472119,17z/data=!3m1!4b1!4m5!3m4!1s0x8838f5b17b939639:0xa48a48432cd880fb!8m2!3d40.147438!4d-82.9450232");
    else /* else use Google */
        window.open("https://www.google.com/maps/place/460+Polaris+Pkwy+%23150,+Westerville,+OH+43082/@40.147438,-82.9472119,17z/data=!3m1!4b1!4m5!3m4!1s0x8838f5b17b939639:0xa48a48432cd880fb!8m2!3d40.147438!4d-82.9450232");
}