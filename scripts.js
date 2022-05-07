let comments = [];

let onSubmitClick = function() {
    let displayNameInput = document.getElementById("display-name-input");
    let commentInput = document.getElementById("comment-input");

    if(displayNameInput.value == "" || displayNameInput.value == null) {
        return;
    }
    if(commentInput.value == "" || commentInput.value == null) {
        return;
    }
    comments.push({
        "displayName": displayNameInput.value,
        "commentDetails": commentInput.value
    });

    reloadComments();
    console.log(comments);
};

let reloadComments = function() {
    let commentHTML = "";
    comments.slice().reverse().forEach(comObj => {
        commentHTML += `
            <div class="comment-item">
                    <span class="icon"><img src="./user.png" height="60px"/></span>
                    <div class="comment-item-main">
                        <div class="top-row">
                            <div class="display-name">${comObj.displayName}</div>
                            <div class="right-buttons">
                                <div><button class="button">edit</button></div>
                                <div><button class="button">delete</button></div>
                            </div>
                        </div>
                        <div class="bottom-row">
                            <div class="comment-details">${comObj.commentDetails}</div>
                        </div>
                    </div>
                </div>
        `;
    });
    document.getElementById("comment-section").innerHTML = commentHTML;
}