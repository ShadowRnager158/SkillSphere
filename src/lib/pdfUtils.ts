import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { logoBase64 } from '@/assets/logoBase64' // we'll create this next

export const generateClientGuidePDF = (guideSections: { title: string; steps: string[] }[]) => {
  const doc = new jsPDF()
  const brandBlue = [37, 99, 235] // Tailwind blue-600
  const brandIndigo = [79, 70, 229] // Tailwind indigo-700

  // Logo
  doc.addImage(logoBase64, 'PNG', 15, 10, 30, 30)

  // Title
  doc.setFontSize(20)
  doc.setTextColor(...brandBlue)
  doc.text('SkillSphere Client Guide 2025', 50, 20)

  // Subtitle
  doc.setFontSize(14)
  doc.setTextColor(60)
  doc.text('Complete Guide to Hiring Top Talent', 50, 28)

  // Divider
  doc.setDrawColor(...brandBlue)
  doc.setLineWidth(0.5)
  doc.line(15, 40, 195, 40)

  // Sections
  guideSections.forEach(section => {
    autoTable(doc, {
      head: [[section.title]],
      body: section.steps.map((step, i) => [`${i + 1}. ${step}`]),
      headStyles: { fillColor: brandIndigo, textColor: 255, fontSize: 13 },
      bodyStyles: { fontSize: 11, cellPadding: 5 },
      startY: doc.lastAutoTable?.finalY ? doc.lastAutoTable.finalY + 10 : 50,
      theme: 'grid',
      styles: { lineColor: [200, 200, 200], lineWidth: 0.1 }
    })
  })

  // Footer with page numbers
  const pageCount = doc.getNumberOfPages()
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i)
    doc.setFontSize(10)
    doc.setTextColor(150)
    doc.text(`Page ${i} of ${pageCount}`, doc.internal.pageSize.width - 40, doc.internal.pageSize.height - 10)
  }

  doc.save('SkillSphere-Client-Guide-2025.pdf')
}
