let currentTab = "all";
const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");
const emptyState = document.getElementById("empty-state");

//  if (allContainer.children.length < 1) {
//      //emptyState.classList.remove("hidden");
//      console.log(emptyState);
//  } else if (interviewContainer.children.length < 1) {
//      emptyState.classList.remove("hidden");
//  } else if (rejectedContainer.children.length < 1) {
//      emptyState.classList.remove("hidden");
//  }

            
//console.log(statInterview, statRejected);
//console.log(allContainer, interviewContainer, rejectedContainer);
emptyState.classList.add('hidden')
function switchTab(tab) {
    //console.log(tab);
    const tabs = ["all", "interview", "rejected"];
    currentTab = tab;
     

    for (const t of tabs) {
        const tagName = document.getElementById("tab-" + t);
        //console.log(tagName);
        if (t === tab) {
            tagName.classList.add("tab-active");
            //tagName.classList.remove(...tabInactive);
        } else {
            tagName.classList.remove("tab-active");
        }

        if (tab === "all") {
            //console.log("all");
            allContainer.classList.remove("hidden");
            interviewContainer.classList.add("hidden");
            rejectedContainer.classList.add("hidden");
            if (allContainer.children.length < 1) {
                emptyState.classList.remove("hidden");
            }
        } else if (tab === "interview") {
            //console.log("interview");
            interviewContainer.classList.remove("hidden");
            allContainer.classList.add("hidden");
            rejectedContainer.classList.add("hidden");
            if (interviewContainer.children.length < 1) {
                emptyState.classList.remove("hidden");
            }
        } else {
            //console.log("rejected");
            rejectedContainer.classList.remove("hidden");
            allContainer.classList.add("hidden");
            interviewContainer.classList.add("hidden");
            if (rejectedContainer.children.length < 1) {
                emptyState.classList.remove("hidden");
            }
        }
    }
    stateUpdate();
}
// Stat Update

const totalStat = document.getElementById("stat-total");
const interviewStat = document.getElementById("stat-interview");
const rejectedStat = document.getElementById("stat-rejected");
const availableStat = document.getElementById("available");
//console.log(totalStat, '1', interviewStat, '2', rejectedStat, '3');
// totalStat.innerText = allContainer.children.length;

//  emptyState not hide when no children of all , interview, rejected container
// if (allContainer.children.length == 0) {
//     emptyState.classList.remove("hidden");
// } else if (interviewContainer.children.length == 0) {
//     emptyState.classList.remove("hidden");
// } else if (rejectedContainer.children.length == 0) {
//     emptyState.classList.remove("hidden");
// }

switchTab(currentTab);

document
    .getElementById("jod-container")
    .addEventListener("click", function (event) {
        const clickElement = event.target;
        const card = clickElement.closest(".card");
        const status = card.querySelector(".satus");
        const parent = card.parentNode;
        //console.log(status);
        if (clickElement.classList.contains("interview")) {
            status.innerText = "Interviewed";
            interviewContainer.appendChild(card);
            //interviewStat.innerText = interviewContainer.children.length;

            stateUpdate();
        } else if (clickElement.classList.contains("delete")) {
            parent.removeChild(card);
        } else if (clickElement.classList.contains("rejected")) {
            status.innerText = "Rejected";
            rejectedContainer.appendChild(card);
            //rejectedStat.innerText = rejectedContainer.children.length;
            stateUpdate();
        }
    });

function stateUpdate() {
    const counts = {
        all: (totalStat.innerText = allContainer.children.length),
        interview: (interviewStat.innerText =
            interviewContainer.children.length),
        rejected: (rejectedStat.innerText = rejectedContainer.children.length),
    };
    totalStat.innerText = counts.all;
    interviewStat.innerText = counts.interview;
    rejectedStat.innerText = counts.rejected;
    // not update interview and rejected try stateUpdate inside switchTab but not work
    available.innerText = counts.all;
    if (counts[currentTab] <1 ) {
        emptyState.classList.remove('hidden');
    }else{
emptyState.classList.add("hidden");
    }
}

stateUpdate();
