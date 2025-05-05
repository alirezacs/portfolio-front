
import React from 'react';
import { useLanguage } from '@/context/language-context';
import { Navbar } from '@/components/navbar';
import { ParticleBackground } from '@/components/particle-background';
import { SectionHeader } from '@/components/section-header';
import { SkillCard } from '@/components/skill-card';
import { Button } from '@/components/ui/button';
import { Github, Instagram, Mail, Briefcase, Calendar, FileText, BadgeJapaneseYenIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {SiGit, SiJavascript, SiLaravel, SiNextdotjs, SiPhp, SiReact, SiTailwindcss} from 'react-icons/si';

const Index = () => {
  const { t, dir } = useLanguage();

  // Define skill icons for simplicity
  const LaravelIcon = () => <div className="relative p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-5xl"><SiLaravel /></div>;
  const BackendDeveloperIcon = () => <div className="relative p-3 rounded-full bg-blue-100 dark:bg-blue-900/30"><SiPhp /></div>;
  const FrontendDeveloperIcon = () => <div className="relative p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30"><SiNextdotjs /></div>;
  const TailwindIcon = () => <div className="relative p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30"><SiTailwindcss /></div>;
  const JavascriptIcon = () => <div className="relative p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30"><SiJavascript /></div>;
  const ReactIcon = () => <div className="relative p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30"><SiReact /></div>;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/20 dark:from-background dark:to-slate-900/50">
      <ParticleBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center relative z-10">
          <div 
            className="w-40 h-40 rounded-full overflow-hidden border-4 border-accent/20 mb-6 animate-float shadow-xl"
            style={{ animationDelay: '200ms' }}
          >
            <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-4xl font-bold text-white">AM</div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <span className="text-shimmer">{t('name')}</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl mb-8 text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
            {t('role')}
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '800ms' }}>
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-accent/25">
              {t('viewResume')}
            </Button>
            <Button size="lg" variant="outline" className="border-accent hover:border-accent/80 hover:bg-accent/5">
              {t('contactMe')}
            </Button>
          </div>
          
          {/* Animated Blobs */}
          <div className="blob-animation w-64 h-64" style={{ top: '20%', left: '15%', animationDelay: '0s' }}></div>
          <div className="blob-animation w-80 h-80" style={{ bottom: '10%', right: '10%', animationDelay: '2s' }}></div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4">
          <SectionHeader title="about" />
          
          <div className="max-w-3xl mx-auto bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-border relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-2xl"></div>
            
            <p className="leading-relaxed mb-6 relative z-10">
              {t('aboutText')}
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full px-3 py-1 text-sm">PHP</span>
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full px-3 py-1 text-sm">LARAVEL</span>
              <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full px-3 py-1 text-sm">Tailwindcss</span>
              <span className="bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 rounded-full px-3 py-1 text-sm">Next/js</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-secondary/30 dark:bg-slate-900/30 relative">
        <div className="container mx-auto px-4">
          <SectionHeader title="skills" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <SkillCard title="Laravel" icon={<LaravelIcon />} delay={100} />
            <SkillCard title="PHP" icon={<BackendDeveloperIcon />} delay={300} />
            <SkillCard title="NEXT/JS" icon={<FrontendDeveloperIcon />} delay={500} />
            <SkillCard title="TailwindCss" icon={<TailwindIcon />} delay={500} />
            <SkillCard title="Javascript" icon={<JavascriptIcon />} delay={500} />
            <SkillCard title="React" icon={<ReactIcon />} delay={500} />
          </div>
        </div>
        
        <div className="blob-animation w-96 h-96" style={{ top: '30%', right: '-5%', animationDelay: '1s' }}></div>
      </section>

      {/* Experience Section (New) */}
      <section id="experience" className="py-20 relative">
        <div className="container mx-auto px-4">
          <SectionHeader title="experience" />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-blue-500 rounded-full"></div>
              
              {/* Experience Item 1 */}
              <div className="mb-12 flex flex-col md:flex-row" style={{ opacity: 0, animation: 'fade-in 0.5s ease-out 200ms forwards' }}>
                <div className="md:w-1/2 relative md:pr-12 mb-6 md:mb-0">
                  <div className="md:text-right">
                    <h3 className="text-xl font-semibold">{t('work1Title')}</h3>
                    <div className="flex items-center md:justify-end text-accent mt-1 mb-2">
                      <Briefcase className="w-4 h-4 mr-1" />
                      <a href='https://fanavaran.ca/' target='_blank' className="text-sm">{t('work1Company')}</a>
                    </div>
                    <div className="flex items-center md:justify-end text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{t('work1Date')}</span>
                    </div>
                  </div>
                  <div className="hidden md:block absolute top-0 right-0 w-4 h-4 rounded-full bg-accent translate-x-1/2"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 relative">
                  <div className="block md:hidden absolute top-0 left-0 w-4 h-4 rounded-full bg-accent -translate-x-1/2"></div>
                  <p className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg shadow border border-border/50 backdrop-blur-sm">
                    {t('work1Desc')}
                  </p>
                </div>
              </div>
              
              {/* Experience Item 2 */}
              <div className="mb-12 flex flex-col md:flex-row" style={{ opacity: 0, animation: 'fade-in 0.5s ease-out 400ms forwards' }}>
                <div className="md:w-1/2 md:order-2 relative md:pl-12 mb-6 md:mb-0">
                  <div className="md:text-left">
                    <h3 className="text-xl font-semibold">{t('work2Title')}</h3>
                    <div className="flex items-center text-accent mt-1 mb-2">
                      <Briefcase className="w-4 h-4 mr-1" />
                      <span className="text-sm">{t('work2Company')}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{t('work2Date')}</span>
                    </div>
                  </div>
                  <div className="hidden md:block absolute top-0 left-0 w-4 h-4 rounded-full bg-accent -translate-x-1/2"></div>
                </div>
                <div className="md:w-1/2 md:order-1 md:pr-12 relative">
                  <div className="block md:hidden absolute top-0 left-0 w-4 h-4 rounded-full bg-accent -translate-x-1/2"></div>
                  <p className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg shadow border border-border/50 backdrop-blur-sm md:text-right">
                    {t('work2Desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="blob-animation w-80 h-80" style={{ bottom: '10%', right: '5%', animationDelay: '2.5s' }}></div>
      </section>
      
      {/* Portfolio Section (New) */}
      <section id="portfolio" className="py-20 bg-secondary/30 dark:bg-slate-900/30 relative">
        <div className="container mx-auto px-4">
          <SectionHeader title="portfolio" />
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Portfolio Item 1 */}
              <div 
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500"
                style={{ opacity: 0, animation: 'fade-in 0.5s ease-out 200ms forwards' }}
              >
                <a href='https://sinaquf.com/' className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                  <FileText className="text-white w-12 h-12 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500" />
                </a>
                <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 flex items-center justify-center">
                  <div className="text-4xl opacity-80">Store</div>
                </div>
                <div className="p-6 bg-white dark:bg-slate-800">
                  <h3 className="text-xl font-semibold mb-2">Store Website (sinaquf)</h3>
                  <p className="text-muted-foreground text-sm">A modern online store for men’s clothing based in Tehran, Iran, built with the latest web technologies to deliver a fast, stylish, and user-friendly shopping experience.</p>
                </div>
              </div>
              
              {/* Portfolio Item 2 */}
              <div 
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500"
                style={{ opacity: 0, animation: 'fade-in 0.5s ease-out 400ms forwards' }}
              >
                <a href='https://tarrzan.ir/' className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                  <FileText className="text-white w-12 h-12 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500" />
                </a>
                <div className="h-48 bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30 flex items-center justify-center">
                  <div className="text-4xl opacity-80">Pet Shop</div>
                </div>
                <div className="p-6 bg-white dark:bg-slate-800">
                  <h3 className="text-xl font-semibold mb-2">Pet shop and veterinary Website</h3>
                  <p className="text-muted-foreground text-sm">
                    A comprehensive pet shop website offering a wide range of pet accessories and medicines, along with an integrated module for veterinary services to ensure complete care for your pets.
                  </p>
                </div>
              </div>
              
              {/* Portfolio Item 3 */}
              <div 
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500"
                style={{ opacity: 0, animation: 'fade-in 0.5s ease-out 600ms forwards' }}
              >
                <a href='#' className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                  <FileText className="text-white w-12 h-12 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500" />
                </a>
                <div className="h-48 bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 flex items-center justify-center">
                  <div className="text-4xl opacity-80">Book Shop</div>
                </div>
                <div className="p-6 bg-white dark:bg-slate-800">
                  <h3 className="text-xl font-semibold mb-2">Book Shop Website</h3>
                  <p className="text-muted-foreground text-sm">
                    An online bookstore specializing in audio and digital books, offering a convenient and modern reading experience for book lovers everywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="blob-animation w-80 h-80" style={{ top: '20%', left: '5%', animationDelay: '1.5s' }}></div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 relative">
        <div className="container mx-auto px-4">
          <SectionHeader title="achievements" />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {/* Achievement 1 */}
              <div className="flex flex-col items-center justify-center bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-border hover:shadow-xl transition-all duration-300 group" style={{ opacity: 0, animation: 'fade-in 0.5s ease-out 200ms forwards' }}>
                <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-bold">🏆</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('nationalMedal')}</h3>
                <p className="text-muted-foreground text-justify">
                  {t('nationalMedalDescription')}
                </p>
              </div>
              
            </div>
          </div>
        </div>
        
        <div className="blob-animation w-80 h-80" style={{ bottom: '10%', left: '5%', animationDelay: '3s' }}></div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/30 dark:bg-slate-900/30 relative">
        <div className="container mx-auto px-4">
          <SectionHeader title="contact" />
          
          <div className="max-w-md mx-auto bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-border">
            <div className="flex flex-col gap-6 items-center">
              <a 
                href="https://gitlab.com/alireza.cs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full p-4 rounded-lg transition-all duration-300 hover:bg-secondary dark:hover:bg-slate-700/50 group"
              >
                <Github className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-accent transition-colors duration-300" />
                <span>gitlab.com/alireza.cs</span>
              </a>
              
              <a 
                href="https://github.com/alirezacs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full p-4 rounded-lg transition-all duration-300 hover:bg-secondary dark:hover:bg-slate-700/50 group"
              >
                <Github className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-accent transition-colors duration-300" />
                <span>github.com/alirezacs</span>
              </a>
              
              <a 
                href="https://www.instagram.com/alirezam.p90000/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full p-4 rounded-lg transition-all duration-300 hover:bg-secondary dark:hover:bg-slate-700/50 group"
              >
                <Instagram className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-accent transition-colors duration-300" />
                <span>instagram.com/airezam.p90000</span>
              </a>
              
              <a 
                href="mailto:alirezam.p90000@gmail.com" 
                className="flex items-center gap-3 w-full p-4 rounded-lg transition-all duration-300 hover:bg-secondary dark:hover:bg-slate-700/50 group"
              >
                <Mail className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-accent transition-colors duration-300" />
                <span>alirezam.p90000@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-border/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Alireza Mardani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
