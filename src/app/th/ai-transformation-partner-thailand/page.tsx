import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { absoluteUrl, bookingHref, site } from "@/lib/site";
import {
  Closing,
  SectionLabel,
  TextLink,
} from "@/components/editorial/Elements";

export const metadata: Metadata = {
  title: "AI Transformation ในประเทศไทย | Archangel Company Limited",
  description:
    "Archangel Company Limited บริษัทซอฟต์แวร์และ AI ในกรุงเทพฯ ช่วยทีมผู้บริหารค้นหาโอกาส AI ที่มีมูลค่าทางธุรกิจ ออกแบบ workflow ใหม่ พัฒนาระบบ และวัดผลลัพธ์",
  alternates: {
    canonical: "/th/ai-transformation-partner-thailand",
    languages: {
      "en-TH": "/ai-transformation-partner-thailand",
      "th-TH": "/th/ai-transformation-partner-thailand",
      "x-default": "/ai-transformation-partner-thailand",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AI Transformation ในประเทศไทย | Archangel",
    description:
      "กลยุทธ์และการพัฒนา AI สำหรับทีมผู้บริหารในประเทศไทย โดยเริ่มจากงานจริงและวัดผลลัพธ์ทางธุรกิจ",
    url: "/th/ai-transformation-partner-thailand",
    type: "website",
    locale: "th_TH",
    siteName: "Archangel",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Archangel — AI Transformation ประเทศไทย",
      },
    ],
  },
};

const thaiServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${absoluteUrl("/th/ai-transformation-partner-thailand")}#service`,
  name: "AI Transformation ในประเทศไทย",
  serviceType: "AI transformation strategy and implementation",
  inLanguage: "th",
  url: absoluteUrl("/th/ai-transformation-partner-thailand"),
  description:
    "บริการวางกลยุทธ์ ออกแบบ workflow พัฒนาระบบ AI และวัดผลลัพธ์สำหรับองค์กรในประเทศไทย",
  areaServed: {
    "@type": "Country",
    name: "Thailand",
  },
  provider: {
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.legalName,
    url: site.url,
  },
};

const areas = [
  [
    "การเงินและการปฏิบัติการ",
    "งานรับเอกสาร ใบแจ้งหนี้ การอนุมัติ การกระทบยอด และรายงานสำหรับผู้บริหาร",
  ],
  [
    "ลูกค้าและงานเชิงพาณิชย์",
    "คำขอบริการ การจัดการเอกสาร ความรู้ภายใน และการติดตามงานขาย",
  ],
  [
    "สุขภาพ",
    "เอกสารทางคลินิกและการสื่อสารกับผู้ป่วยหลายภาษา",
  ],
];

export default function ThaiAITransformationPage() {
  return (
    <main id="main-content" className="interior" lang="th">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(thaiServiceSchema) }}
      />
      <section className="page-hero page-shell">
        <SectionLabel number="01">AI transformation / Thailand</SectionLabel>
        <h1>
          เปลี่ยน AI จากไอเดีย
          <br />
          <span className="muted">ให้เป็นผลลัพธ์ของธุรกิจ</span>
        </h1>
        <p className="hero-deck">
          Archangel Company Limited ช่วยทีมผู้บริหารในประเทศไทยค้นหางานที่มีต้นทุนสูง
          ออกแบบกระบวนการใหม่ พัฒนาระบบ AI และวัดผลลัพธ์ที่เกิดขึ้นจริง
        </p>
        <div className="hero-actions">
          <Link href="/ai-transformation" className="button-primary">
            ดู AI Transformation Workshop
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <TextLink href={bookingHref}>นัดคุย AI Opportunity Call</TextLink>
        </div>
      </section>

      <section className="dark-section">
        <div className="page-shell section-grid">
          <div>
            <SectionLabel number="02">แนวทางการทำงาน</SectionLabel>
            <h2>
              เริ่มจากงานจริง
              <br />
              <span className="muted">ไม่ใช่จากเครื่องมือ</span>
            </h2>
          </div>
          <ol className="editorial-list">
            {[
              [
                "หางานที่มีต้นทุนสูง",
                "ดูขั้นตอนจริง ปริมาณงาน เวลา ต้นทุน และจุดที่ทีมต้องแก้ปัญหาซ้ำ",
              ],
              [
                "ปรับ workflow ก่อนสร้าง",
                "ตัดขั้นตอนที่ไม่จำเป็น กำหนดจุดตัดสินใจ และระบุว่างานใดควรให้คนควบคุม",
              ],
              [
                "พัฒนาระบบที่พิสูจน์คุณค่าได้",
                "เริ่มจากขอบเขตที่ชัดเจน เชื่อมกับข้อมูลและระบบจริงขององค์กร",
              ],
              [
                "วัดผลลัพธ์",
                "เปรียบเทียบเวลา ต้นทุน คุณภาพ และการใช้งานกับ baseline ก่อนเริ่มโครงการ",
              ],
            ].map(([title, copy], i) => (
              <li key={title}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="page-shell section-grid">
        <div>
          <SectionLabel number="03">จุดเริ่มต้น</SectionLabel>
          <h2>
            งานที่ทีมของคุณ
            <br />
            ทำอยู่ทุกวัน
          </h2>
        </div>
        <ol className="editorial-list">
          {areas.map(([title, copy], i) => (
            <li key={title}>
              <span>0{i + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="page-shell section-grid">
        <div>
          <SectionLabel number="04">Archangel</SectionLabel>
          <h2>
            บริษัทในประเทศไทย
            <br />
            ทำงานจากกรุงเทพฯ
          </h2>
        </div>
        <div className="prose">
          <p>
            Archangel Company Limited เป็นบริษัทซอฟต์แวร์และ AI ที่จดทะเบียนในประเทศไทย
            และได้รับการส่งเสริมจาก BOI โดย Farhan Sabbir ผู้ก่อตั้งและ Executive Director
            เป็นผู้นำงานด้านกลยุทธ์และการพัฒนา
          </p>
          <p>
            เป้าหมายคือทำให้ AI ใช้งานได้จริงในองค์กร และสร้างผลลัพธ์ที่ผู้บริหารสามารถวัดได้
          </p>
          <TextLink href="/company">ข้อมูลบริษัท Archangel</TextLink>
        </div>
      </section>

      <Closing title="เริ่มจากงานที่ควรเปลี่ยน" />
    </main>
  );
}
