import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "94yasw8t",    // found in sanityfolder/sanity.json || manage.sanity.io on your project page
  dataset: "production"
})