import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { ArrowLeft, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PlaceholderPage = ({ title, subtitle, onOpenEnquiry }) => {
  return (
    <div className="py-20 bg-[#FAFAFC] min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        <SectionHeading
          badge="Keshav Madhav Group of Institutions"
          title={title}
          subtitle={subtitle}
        />

        <Card className="p-10 space-y-6 text-center bg-white border-2 border-slate-200">
          <p className="text-slate-600 text-base leading-relaxed">
            Detailed content for <strong className="text-[#0F2537]">{title}</strong> will be expanded in the next iteration. All institutional details, faculty, admission procedures, and infrastructure specs will be mapped directly from the KMGI master document.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/">
              <Button variant="secondary" icon={ArrowLeft}>
                Return to Homepage
              </Button>
            </Link>
            <Button variant="gold" onClick={onOpenEnquiry} icon={GraduationCap}>
              Submit Admission Enquiry
            </Button>
          </div>
        </Card>

      </div>
    </div>
  );
};
