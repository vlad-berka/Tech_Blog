const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#blog-title").value.trim();
  const body_content = document
    .querySelector("#blog-body_content")
    .value.trim();
    const blog_id = event.target.getAttribute("data-id");

  if (title && body_content && blog_id) {
    const response = await fetch(`/api/blogs`, {
      method: "POST",
      body: JSON.stringify({ title, body_content, blog_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create blog post");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const comment_id = event.target.getAttribute("data-id");
    const blog_id = event.target.getAttribute("data-blog_id");

    const response = await fetch(`/api/comments/${comment_id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace(`/project/${blog_id}`);
    } else {
      alert("Failed to delete blog post");
    }
  }
};

document
    .querySelector('.comment-list')
    .addEventListener('click', delButtonHandler);

