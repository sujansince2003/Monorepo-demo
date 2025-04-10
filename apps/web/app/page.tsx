"use client";
import InputFiled from "@repo/ui/InputField";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <InputFiled placeholder={"Enter room id"} />
      <button onClick={() => router.push("/chat/123")}>Join chat room</button>
    </div>
  );
}
