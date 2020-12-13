import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "4z9l1gm9",    // found in sanityfolder/sanity.json || manage.sanity.io on your project page
  dataset: "production"
})