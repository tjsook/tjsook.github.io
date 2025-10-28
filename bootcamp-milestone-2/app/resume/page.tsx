import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="main-resume">
      <div className="rounded-square">
        <embed
          src="/TKResume.pdf"
          type="application/pdf"
          width="100%"
          height="650"
          style={{ borderRadius: "30px" }}
        />
      </div>
    </main>
  );
}
