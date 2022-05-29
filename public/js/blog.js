const newCommentHandler = async (event) => {
  event.preventDefault();

  const blog_id = event.target[1].getAttribute("data-id");

  const body_content = document
    .querySelector("#comment-body_content")
    .value.trim();

  if (blog_id && body_content) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ blog_id, body_content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace(`/blog/${blog_id}`);
    } else {
      alert("Failed to create comment");
    }
  }
};

const delButtonHandler = async (event) => {
  // event.preventDefault();
  console.log(event.target);

  if (event.target.hasAttribute("data-id")) {
    const comment_id = event.target.getAttribute("data-id");
    const blog_id = event.target.getAttribute("data-blog_id");

    const response = await fetch(`/api/comments/${comment_id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      // document.location.replace(`/blog/${blog_id}`);
    } else {
      alert("Failed to delete blog post in del button handler");
    }
  }
};

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newCommentHandler);

document
  .querySelector(".comment-list")
  .addEventListener("click", delButtonHandler);
