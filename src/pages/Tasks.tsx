import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useTask } from '@/contexts/TaskContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { 
  Search, 
  Filter, 
  MapPin, 
  DollarSign, 
  Clock, 
  Star,
  TrendingUp,
  Zap,
  Briefcase,
  Calendar,
  ArrowRight,
  Grid3X3,
  List,
  SortAsc,
  FilterX
} from 'lucide-react';

export default function TasksPage() {
  const { tasks } = useTask();
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Extract filter from URL params
  const categoryParam = searchParams.get('category') || '';
  const filterParam = searchParams.get('filter') || '';

  // State for filters
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState(categoryParam);
  const [filter, setFilter] = useState<'all' | 'urgent' | 'recent'>(
    filterParam === 'urgent' ? 'urgent' : filterParam === 'recent' ? 'recent' : 'all'
  );
  const [sortBy, setSortBy] = useState<'newest' | 'budget-high' | 'budget-low'>('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  // Filtered tasks
  const [filteredTasks, setFilteredTasks] = useState([]);

  // Categories with icons and counts
  const categories = [
    { name: 'All Categories', icon: '🌐', count: tasks.length, color: 'from-gray-500 to-gray-600' },
    { name: 'Web Development', icon: '💻', count: tasks.filter(t => t.category === 'Web Development').length, color: 'from-blue-500 to-blue-600' },
    { name: 'Mobile Apps', icon: '📱', count: tasks.filter(t => t.category === 'Mobile Apps').length, color: 'from-green-500 to-green-600' },
    { name: 'AI & Machine Learning', icon: '🤖', count: tasks.filter(t => t.category === 'AI & Machine Learning').length, color: 'from-purple-500 to-purple-600' },
    { name: 'UI/UX Design', icon: '🎨', count: tasks.filter(t => t.category === 'UI/UX Design').length, color: 'from-pink-500 to-pink-600' },
    { name: 'DevOps & Cloud', icon: '☁️', count: tasks.filter(t => t.category === 'DevOps & Cloud').length, color: 'from-indigo-500 to-indigo-600' },
    { name: 'Product Management', icon: '📊', count: tasks.filter(t => t.category === 'Product Management').length, color: 'from-orange-500 to-orange-600' },
    { name: 'Marketing', icon: '📈', count: tasks.filter(t => t.category === 'Marketing').length, color: 'from-red-500 to-red-600' },
    { name: 'Writing & Translation', icon: '✍️', count: tasks.filter(t => t.category === 'Writing & Translation').length, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Customer Service', icon: '🎧', count: tasks.filter(t => t.category === 'Customer Service').length, color: 'from-teal-500 to-teal-600' },
    { name: 'Legal Services', icon: '⚖️', count: tasks.filter(t => t.category === 'Legal Services').length, color: 'from-amber-500 to-amber-600' },
    { name: 'Finance & Accounting', icon: '💰', count: tasks.filter(t => t.category === 'Finance & Accounting').length, color: 'from-emerald-500 to-emerald-600' }
  ];

  useEffect(() => {
    let result = tasks.filter((task) => task.status === 'open');

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (task) =>
          task.title?.toLowerCase().includes(term) ||
          task.description?.toLowerCase().includes(term) ||
          task.category?.toLowerCase().includes(term) ||
          task.location?.toLowerCase().includes(term)
      );
    }

    // Filter by category (only apply if category is not 'all' or empty)
    if (category && category !== 'all') {
      result = result.filter((task) => task.category === category);
    }

    // Filter by urgency
    if (filter === 'urgent') {
      result = result.filter((task) => task.isUrgent);
    } else if (filter === 'recent') {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      result = result.filter((task) => new Date(task.createdAt) > oneWeekAgo);
    }

    // Filter by price range
    result = result.filter((task) => 
      task.budget >= priceRange[0] && task.budget <= priceRange[1]
    );

    // Sort tasks
    switch (sortBy) {
      case 'budget-high':
        result.sort((a, b) => (b.budget || 0) - (a.budget || 0));
        break;
      case 'budget-low':
        result.sort((a, b) => (a.budget || 0) - (b.budget || 0));
        break;
      case 'newest':
      default:
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
    }

    setFilteredTasks(result);
  }, [tasks, searchTerm, category, filter, sortBy, priceRange]);

  const clearFilters = () => {
    setSearchTerm('');
    setCategory('');
    setFilter('all');
    setSortBy('newest');
    setPriceRange([0, 10000]);
    setSearchParams({});
  };

  const updateURL = (newCategory: string, newFilter: string) => {
    const params = new URLSearchParams();
    if (newCategory && newCategory !== 'all') params.set('category', newCategory);
    if (newFilter && newFilter !== 'all') params.set('filter', newFilter);
    setSearchParams(params);
  };

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    updateURL(newCategory, filter);
  };

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter as 'all' | 'urgent' | 'recent');
    updateURL(category, newFilter);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900' 
        : 'bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50'
    }`}>
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Discover Amazing Projects</h1>
          <p className={`text-xl max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Find the perfect project that matches your skills and interests. 
            From startups to enterprises, there's something for everyone.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className={`border-0 shadow-xl mb-8 backdrop-blur-sm transition-colors duration-300 ${
          isDarkMode ? 'bg-gray-800/80 border-gray-700/50' : 'bg-white/80 border-white/20'
        }`}>
          <CardContent className="p-6">
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for projects, skills, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-xl dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:border-blue-400"
                />
              </div>

              {/* Category Pills */}
              <div className="space-y-3">
                <label className={`block text-sm font-medium ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>Categories</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <Button
                      key={cat.name}
                      variant={category === cat.name ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleCategoryChange(cat.name === 'All Categories' ? '' : cat.name)}
                      className={`flex items-center gap-2 transition-all duration-200 rounded-xl ${
                        category === cat.name 
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                          : 'hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600'
                      }`}
                    >
                      <span className="text-lg">{cat.icon}</span>
                      <span>{cat.name}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Filters */}
              <div className="space-y-3">
                <label className={`block text-sm font-medium ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>Filters</label>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={filter === 'all' ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleFilterChange('all')}
                    className={`flex items-center gap-2 rounded-xl ${
                      filter === 'all' 
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600'
                    }`}
                  >
                    <Filter className="w-4 h-4" />
                    All
                  </Button>
                  <Button
                    variant={filter === 'urgent' ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleFilterChange('urgent')}
                    className={`flex items-center gap-2 rounded-xl ${
                      filter === 'urgent' 
                        ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600'
                    }`}
                  >
                    <Zap className="w-4 h-4" />
                    Urgent
                  </Button>
                  <Button
                    variant={filter === 'recent' ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleFilterChange('recent')}
                    className={`flex items-center gap-2 rounded-xl ${
                      filter === 'recent' 
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600'
                    }`}
                  >
                    <Clock className="w-4 h-4" />
                    Recent
                  </Button>
                </div>
              </div>

              {/* Sort and View */}
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="space-y-3 flex-1">
                  <label className={`block text-sm font-medium ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>Sort By</label>
                  <Select value={sortBy} onValueChange={(value) => setSortBy(value as 'newest' | 'budget-high' | 'budget-low')}>
                    <SelectTrigger className="w-full rounded-xl dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="budget-high">Budget: High to Low</SelectItem>
                      <SelectItem value="budget-low">Budget: Low to High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3 flex-1">
                  <label className={`block text-sm font-medium ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>Price Range</label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      placeholder="Min"
                      className="w-1/2 rounded-xl dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                    />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>-</span>
                    <Input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      placeholder="Max"
                      className="w-1/2 rounded-xl dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className={`block text-sm font-medium ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>View</label>
                  <div className="flex gap-2">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'outline'}
                      size="icon"
                      onClick={() => setViewMode('grid')}
                      className="rounded-xl dark:border-gray-600 dark:text-gray-100"
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'outline'}
                      size="icon"
                      onClick={() => setViewMode('list')}
                      className="rounded-xl dark:border-gray-600 dark:text-gray-100"
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tasks Grid/List */}
        {filteredTasks.length > 0 ? (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {filteredTasks.map((task) => (
              <Card
                key={task.id}
                className={`cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 rounded-xl overflow-hidden ${
                  viewMode === 'list' ? 'flex flex-row' : ''
                } ${isDarkMode ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white'}`}
                onClick={() => navigate(`/tasks/${task.id}`)}
              >
                <CardContent className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className={`font-semibold text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {task.title || 'Untitled Project'}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge 
                          variant="secondary" 
                          className={`${isDarkMode ? 'bg-blue-900/50 text-blue-200 border-blue-700' : 'bg-blue-100 text-blue-700 border-blue-200'}`}
                        >
                          {task.category || 'Uncategorized'}
                        </Badge>
                        {task.isUrgent && (
                          <Badge variant="destructive" className="animate-pulse">
                            <Zap className="w-3 h-3 mr-1" />
                            Urgent
                          </Badge>
                        )}
                      </div>
                    </div>
                    {viewMode === 'list' && (
                      <div className="text-right ml-4">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                          ${task.budget ? task.budget.toLocaleString() : '0'}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Budget</p>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className={`mb-4 line-clamp-3 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {task.description || 'No description available'}
                  </p>

                  {/* Details */}
                  <div className={`grid ${viewMode === 'list' ? 'grid-cols-3' : 'grid-cols-2'} gap-4 text-sm`}>
                    <div className={`flex items-center gap-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <MapPin className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                      <span>{task.location || 'Remote'}</span>
                    </div>
                    <div className={`flex items-center gap-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <DollarSign className="w-4 h-4 text-green-500 dark:text-green-400" />
                      <span className="font-semibold text-green-600 dark:text-green-400">
                        ${task.budget ? task.budget.toLocaleString() : '0'}
                      </span>
                    </div>
                    <div className={`flex items-center gap-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <Clock className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                      <span>{task.createdAt ? new Date(task.createdAt).toLocaleDateString() : 'N/A'}</span>
                    </div>
                    {viewMode === 'list' && (
                      <div className={`flex items-center gap-2 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <Star className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
                        <span>New Project</span>
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <div className={`mt-4 pt-4 border-t ${
                    isDarkMode ? 'border-gray-700' : 'border-gray-100'
                  }`}>
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl"
                      size="sm"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className={`border-0 shadow-lg text-center py-16 transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white'
          }`}>
            <CardContent>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-2xl flex items-center justify-center">
                <Briefcase className="h-10 w-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>No projects found</h3>
              <p className={`mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Try adjusting your filters or search terms to find more projects
              </p>
              <Button 
                onClick={clearFilters}
                variant="outline"
                className="border-blue-300 dark:border-blue-600 text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-400 dark:hover:border-blue-500 rounded-xl"
              >
                <FilterX className="w-4 h-4 mr-2" />
                Clear All Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 text-white transition-colors duration-300">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
                Can't find the right project? Create your own and let talented professionals come to you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/create-task')}
                  className="bg-white dark:bg-gray-100 text-blue-700 dark:text-blue-800 hover:bg-gray-100 dark:hover:bg-gray-200 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl"
                >
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Post a Project
                </Button>
                <Button 
                  size="lg"
                  variant="outline" 
                  onClick={() => navigate('/register')}
                  className="border-white/30 text-white hover:bg-white/10 dark:hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm"
                >
                  Become a Skiller
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}