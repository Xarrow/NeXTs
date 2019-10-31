workflow "Build and Publish" {
  on = "push"
  resolves = "Docker Publish"
}
