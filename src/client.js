import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: "c9n255kx",
  dataset: "production",
  useCdn: true,
})
