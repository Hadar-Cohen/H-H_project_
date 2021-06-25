function getSeriesSuccessCB(seriesNames) {

    for (const s of seriesNames) {
        str += "<option value=" + s + ">" + s + "</option>";
    }
    str += "</select>";
    $("#phView").html(str);
}
function getSeriesErrorCB(err) {
    alert("Error -cant get the Series names");
}

function showEpisodes(series) {
    var selectedText = series.options[series.selectedIndex].innerHTML;
    //initChat(selectedText);
   
    let api = "../api/Totals?seriesName=" + selectedText + "&userId=" + userId;
    ajaxCall("GET", api, "", getEpisodesSuccessCB, Error);
}

function getEpisodesSuccessCB(episodes) {
    console.log(episodes);
    episodesList = "";

    episodes.forEach(ep => {
        episodesList += drawEpisodeCard(ep);
    });
    $("#episodesView").html(episodesList);
}

i = 0;
episodes = [];
function drawEpisodeCard(episode) {
    episodes[i] = episode;
    let str = "<div class='card2' style='width:800px; height: 400px'><a class='deleteEpisodeBtn' onclick=deleteEpisode(episodes["+i+"]) tabindex='0' role='button'>X</a> <center><b><p class='episodeTitle'>" + episode.SeriesName + " season " + episode.SeasonNum + "</p></b></center><img class= 'imgCard' src='" + episode.ImageURL + "'>";
    str += "<div class='episodeBlock'><br><b>" + episode.EpisodeName + "</b></br > " + episode.AirDate + "</br></br><div id='episodeOverView'>" + episode.Overview + "</div></div></div>";
    i++;
    return str;
}

function Error(err) {
    console.log(err);
}

function exitFunc() {
    localStorage.clear();
    document.location = 'homePage.html';
}

function deleteEpisode(episode) {
    let api = "../api/Totals?episodeId=" + episode.EpisodeId + "&seriesId=" + episode.SeriesId + "&userId=" + userId;
    ajaxCall("DELETE", api, "", deleteEpisodesSuccess, Error);
}

function deleteEpisodesSuccess()
{
    location.reload();
    alert('deleted');
}