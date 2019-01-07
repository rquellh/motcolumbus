//This file maps the information in the content.json file to the specific elemenet

$(document).ready(function () {
    const title = $('.list-talk-title')
    const speaker = $('.list-speaker')
    const time = $('.list-time')
    const date = $('.list-date')
    const location = $('.list-address')
    const meetupUrl = $('.attend-button')
    const abstract = $('.abstract')

    $.getJSON('content.json', function (content) {
      title.append(content.nextevent.title)
      speaker.append(content.nextevent.speaker)
      time.append(content.nextevent.time)
      date.append(content.nextevent.date)
      location.append(content.nextevent.location)
      meetupUrl.attr("href", content.nextevent.meetupUrl)
      abstract.append(content.nextevent.abstract)
    })
  })