import { useParams } from "next/navigation";

export default function UserInfo() {
  const params = useParams();
  console.log(params);
  return;
}
