import SingleProject from "@/components/sections/SingleProject";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <SingleProject params={params} />;
}