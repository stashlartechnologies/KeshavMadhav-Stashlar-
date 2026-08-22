import React, { useState } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { FileText, Download, Search, BookOpen, Calendar, ShieldCheck, Filter } from 'lucide-react';
import { DOCUMENTS_DATA } from '../data/kmgiData';

export const DocumentsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Syllabus', 'Question Papers', 'Circulars', 'Notices'];

  const filteredDocs = DOCUMENTS_DATA.filter((doc) => {
    const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doc.stream.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAFAFC] pb-20">
      
      {/* Header Banner */}
      <section className="bg-navy-gradient text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#173752_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="gold" className="px-3.5 py-1 text-xs uppercase tracking-wider">
            Academic Downloads Portal
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif-prestige tracking-tight">
            Official Academic Documents & Resources
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto font-light">
            Download verified syllabus PDFs, question paper banks, official circulars, and campus policy notices.
          </p>
        </div>
      </section>

      {/* Main Documents Hub */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Search & Category Filter Controls */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              
              {/* Search Bar */}
              <div className="md:col-span-6 relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Search by course, title, or document keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0F2537] focus:border-transparent text-sm"
                />
              </div>

              {/* Category Filters */}
              <div className="md:col-span-6 flex flex-wrap gap-2 justify-start md:justify-end">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#0F2537] text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

            </div>
          </div>

          {/* Documents Grid */}
          {filteredDocs.length === 0 ? (
            <Card className="p-12 text-center text-slate-500 bg-white border-2 border-slate-200">
              <FileText className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <p className="text-base font-semibold text-slate-700">No documents found matching your search.</p>
              <p className="text-xs text-slate-500 mt-1">Try resetting the category filter or search keywords.</p>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDocs.map((doc) => (
                <Card key={doc.id} className="p-6 space-y-4 border-2 border-slate-200 hover:border-[#0F2537] bg-white flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-[#0F2537] bg-[#0F2537]/10 px-2 py-0.5 rounded uppercase">
                        {doc.stream} • {doc.category}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">{doc.fileSize}</span>
                    </div>

                    <h3 className="text-lg font-bold font-serif-prestige text-[#0F2537]">
                      {doc.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      {doc.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-semibold">{doc.fileName}</span>
                    <Button variant="gold" size="sm" icon={Download}>
                      Download Resource
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
