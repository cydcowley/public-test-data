$(document).ready( () => {
    $(".learn").on("mouseenter", () => {
        $(".learn").css({
            color: '#FFFFFF',
            backgroundColor: '#003E74',
        })
    })

    $(".learn").on("mouseleave", () => {
        $(".learn").css({
            color: '#003E74',
            backgroundColor: '#FFFFFF',
        })
    })

    $(".teach").on("mouseenter", () => {
        $(".teach").css({
            color: '#FFFFFF',
            backgroundColor: '#003E74',
        })
    })

    $(".teach").on("mouseleave", () => {
        $(".teach").css({
            color: '#003E74',
            backgroundColor: '#FFFFFF',
        })
    })

    $(".code").on("mouseenter", () => {
        $(".code").css({
            color: '#FFFFFF',
            backgroundColor: '#003E74',
        })
    })

    $(".code").on("mouseleave", () => {
        $(".code").css({
            color: '#003E74',
            backgroundColor: '#FFFFFF',
        })
    })

})