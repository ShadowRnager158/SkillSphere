import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Video, 
  FileText, 
  Globe, 
  Search, 
  Filter,
  Play,
  Download,
  ExternalLink,
  Star,
  Clock,
  Users,
  TrendingUp,
  Bookmark,
  Share2
} from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'course' | 'video' | 'article' | 'ebook' | 'tutorial';
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  rating: number;
  students: number;
  isFree: boolean;
  thumbnail: string;
  url: string;
  tags: string[];
}

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const resources: Resource[] = [
    {
      id: '1',
      title: 'Complete React Developer Course 2024',
      description: 'Master React from basics to advanced concepts including hooks, context, and modern patterns.',
      type: 'course',
      category: 'Frontend Development',
      difficulty: 'Intermediate',
      duration: '12 hours',
      rating: 4.8,
      students: 15420,
      isFree: false,
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f13434a7d4e3?w=400&h=250&fit=crop',
      url: '#',
      tags: ['React', 'JavaScript', 'Frontend', 'Hooks']
    },
    {
      id: '2',
      title: 'UI/UX Design Fundamentals',
      description: 'Learn the principles of good design, user research, and creating intuitive interfaces.',
      type: 'video',
      category: 'Design',
      difficulty: 'Beginner',
      duration: '45 min',
      rating: 4.6,
      students: 8920,
      isFree: true,
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
      url: '#',
      tags: ['Design', 'UX', 'UI', 'Research']
    },
    {
      id: '3',
      title: 'Python for Data Science',
      description: 'Comprehensive guide to using Python for data analysis, visualization, and machine learning.',
      type: 'ebook',
      category: 'Data Science',
      difficulty: 'Advanced',
      duration: '300 pages',
      rating: 4.9,
      students: 12350,
      isFree: false,
      thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop',
      url: '#',
      tags: ['Python', 'Data Science', 'ML', 'Analytics']
    },
    {
      id: '4',
      title: 'DevOps Best Practices',
      description: 'Essential DevOps practices including CI/CD, containerization, and cloud deployment.',
      type: 'tutorial',
      category: 'DevOps',
      difficulty: 'Intermediate',
      duration: '2 hours',
      rating: 4.7,
      students: 6780,
      isFree: true,
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
      url: '#',
      tags: ['DevOps', 'CI/CD', 'Docker', 'Cloud']
    },
    {
      id: '5',
      title: 'JavaScript ES6+ Masterclass',
      description: 'Deep dive into modern JavaScript features and best practices for professional development.',
      type: 'course',
      category: 'Programming',
      difficulty: 'Intermediate',
      duration: '8 hours',
      rating: 4.8,
      students: 18920,
      isFree: false,
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
      url: '#',
      tags: ['JavaScript', 'ES6', 'Modern JS', 'Programming']
    },
    {
      id: '6',
      title: 'Product Management Essentials',
      description: 'Learn product strategy, user research, and agile methodologies for successful product development.',
      type: 'article',
      category: 'Product Management',
      difficulty: 'Beginner',
      duration: '15 min read',
      rating: 4.5,
      students: 4560,
      isFree: true,
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      url: '#',
      tags: ['Product', 'Strategy', 'Agile', 'Research']
    }
  ];

  const categories = ['all', 'Frontend Development', 'Design', 'Data Science', 'DevOps', 'Programming', 'Product Management'];
  const types = ['all', 'course', 'video', 'article', 'ebook', 'tutorial'];
  const difficulties = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    const matchesDifficulty = selectedDifficulty === 'all' || resource.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesType && matchesDifficulty;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'course': return <BookOpen className="w-4 h-4" />;
      case 'video': return <Video className="w-4 h-4" />;
      case 'article': return <FileText className="w-4 h-4" />;
      case 'ebook': return <BookOpen className="w-4 h-4" />;
      case 'tutorial': return <Globe className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'course': return 'from-blue-500 to-blue-600';
      case 'video': return 'from-purple-500 to-purple-600';
      case 'article': return 'from-green-500 to-green-600';
      case 'ebook': return 'from-orange-500 to-orange-600';
      case 'tutorial': return 'from-indigo-500 to-indigo-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const downloadAllPdf = () => {
    try {
      const content = filteredResources.map(r => `- ${r.title} (${r.type})`).join('\n');
      const blob = new Blob([`Resources Summary\n\n${content}`], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'resources-summary.pdf';
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div>Learning Resources</div>
                  <div className="text-lg font-normal text-gray-600 mt-1">
                    Expand your skills with curated content
                  </div>
                </div>
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-center p-4 bg-white rounded-xl shadow-lg border border-gray-200">
                <div className="text-2xl font-bold text-blue-600 mb-1">{resources.length}</div>
                <div className="text-sm text-gray-600">Resources</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-lg border border-gray-200">
                <div className="text-2xl font-bold text-green-600 mb-1">{resources.filter(r => r.isFree).length}</div>
                <div className="text-sm text-gray-600">Free</div>
              </div>
              <Button variant="outline" className="ml-2" onClick={downloadAllPdf}>
                <Download className="w-4 h-4 mr-2" />
                Download All as PDF
              </Button>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="border-0 shadow-xl mb-8">
          <CardContent className="p-6">
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search resources, topics, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-xl"
                />
              </div>

              {/* Filter Controls */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    {types.map((type) => (
                      <option key={type} value={type}>
                        {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Difficulty Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    {difficulties.map((difficulty) => (
                      <option key={difficulty} value={difficulty}>
                        {difficulty === 'all' ? 'All Levels' : difficulty}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Results Count */}
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  Showing <span className="font-semibold">{filteredResources.length}</span> of <span className="font-semibold">{resources.length}</span> resources
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedType('all');
                    setSelectedDifficulty('all');
                  }}
                  className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Clear Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="relative">
                <img
                  src={resource.thumbnail}
                  alt={resource.title}
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge className={`bg-gradient-to-r ${getTypeColor(resource.type)} text-white border-0`}>
                    {getTypeIcon(resource.type)}
                    <span className="ml-1">{resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}</span>
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge className={getDifficultyColor(resource.difficulty)}>
                    {resource.difficulty}
                  </Badge>
                </div>
                {resource.isFree && (
                  <div className="absolute bottom-3 left-3">
                    <Badge className="bg-green-500 text-white border-0">
                      FREE
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {resource.title}
                </CardTitle>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {resource.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{resource.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{resource.students.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{resource.rating}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {resource.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400"
                    >
                      <Bookmark className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button 
                      className={`flex-1 ${resource.isFree ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'}`}
                    >
                      {resource.type === 'video' ? (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Watch
                        </>
                      ) : resource.type === 'course' ? (
                        <>
                          <BookOpen className="w-4 h-4 mr-2" />
                          Enroll
                        </>
                      ) : resource.type === 'ebook' ? (
                        <>
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </>
                      ) : (
                        <>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredResources.length === 0 && (
          <Card className="border-0 shadow-lg text-center py-16">
            <CardContent>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
                <BookOpen className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters or search terms to find more learning resources
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedType('all');
                  setSelectedDifficulty('all');
                }}
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400"
              >
                <Filter className="w-4 h-4 mr-2" />
                Clear All Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Call to Action */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center">
              <TrendingUp className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Ready to Level Up Your Skills?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Access our curated collection of courses, tutorials, and resources to accelerate 
              your professional growth and stay ahead in your field.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Browse All Resources
              </Button>
              <Button 
                size="lg"
                className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Request Resource
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
