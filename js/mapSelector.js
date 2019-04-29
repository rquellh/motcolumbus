function mapSelector() {
    if /* if we're on iOS, open in Apple Maps */
        ((navigator.platform.indexOf("iPhone") != -1) ||
        (navigator.platform.indexOf("iPad") != -1) ||
        (navigator.platform.indexOf("iPod") != -1))
        window.open("maps://www.google.com/maps/place/570+Polaris+Pkwy+%23250,+Westerville,+OH+43082/@40.1471571,-82.9503079,17.5z/data=!4m5!3m4!1s0x8838f5b2c2b60dbd:0x996dea1231e82fb7!8m2!3d40.1470574!4d-82.9488954");
    else /* else use Google */
        window.open("https://www.google.com/maps/place/570+Polaris+Pkwy+%23250,+Westerville,+OH+43082/@40.1471571,-82.9503079,17.5z/data=!4m5!3m4!1s0x8838f5b2c2b60dbd:0x996dea1231e82fb7!8m2!3d40.1470574!4d-82.9488954");
}
