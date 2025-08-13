import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useTask } from '@/contexts/TaskContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Discover Amazing Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the perfect project that matches your skills and interests. 
            From startups to enterprises, there's something for everyone.
          </p>
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
                  placeholder="Search for projects, skills, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-xl"
                />
              </div>

              {/* Filter Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={category}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    {categories.map((cat) => (
                      <option key={cat.name} value={cat.name === 'All Categories' ? '' : cat.name}>
                        {cat.name} ({cat.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Filter Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Filter</label>
                  <select
                    value={filter}
                    onChange={(e) => handleFilterChange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="all">All Projects</option>
                    <option value="urgent">Urgent Only</option>
                    <option value="recent">Recent (7 days)</option>
                  </select>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'newest' | 'budget-high' | 'budget-low')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="newest">Newest First</option>
                    <option value="budget-high">Highest Budget</option>
                    <option value="budget-low">Lowest Budget</option>
                  </select>
                </div>

                {/* View Mode */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">View</label>
                  <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className="flex-1 rounded-none border-0"
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className="flex-1 rounded-none border-0"
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                <div className="flex items-center gap-4">
                  <Input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className="w-24 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <span className="text-gray-500">to</span>
                  <Input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 10000])}
                    className="w-24 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <span className="text-gray-500 text-sm">USD</span>
                </div>
              </div>

              {/* Clear Filters */}
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  Showing <span className="font-semibold">{filteredTasks.length}</span> of <span className="font-semibold">{tasks.length}</span> projects
                </p>
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400"
                >
                  <FilterX className="w-4 h-4 mr-2" />
                  Clear Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Categories Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Card
                key={cat.name}
                className={`cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 ${
                  category === cat.name ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                }`}
                onClick={() => handleCategoryChange(cat.name === 'All Categories' ? '' : cat.name)}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">{cat.icon}</div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-gray-600">{cat.count} projects</p>
                  <div className={`w-full h-1 mt-2 rounded-full bg-gradient-to-r ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tasks Grid/List */}
        {filteredTasks.length > 0 ? (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {filteredTasks.map((task) => (
              <Card
                key={task.id}
                className={`cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 ${
                  viewMode === 'list' ? 'flex flex-row' : ''
                }`}
                onClick={() => navigate(`/tasks/${task.id}`)}
              >
                <CardContent className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {task.title || 'Untitled Project'}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge 
                          variant="secondary" 
                          className="bg-blue-100 text-blue-700 border-blue-200"
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
                        <div className="text-2xl font-bold text-green-600">
                          ${task.budget ? task.budget.toLocaleString() : '0'}
                        </div>
                        <p className="text-sm text-gray-600">Budget</p>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {task.description || 'No description available'}
                  </p>

                  {/* Details */}
                  <div className={`grid ${viewMode === 'list' ? 'grid-cols-3' : 'grid-cols-2'} gap-4 text-sm`}>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span>{task.location || 'Remote'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <DollarSign className="w-4 h-4 text-green-500" />
                      <span className="font-semibold text-green-600">
                        ${task.budget ? task.budget.toLocaleString() : '0'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4 text-purple-500" />
                      <span>{task.createdAt ? new Date(task.createdAt).toLocaleDateString() : 'N/A'}</span>
                    </div>
                    {viewMode === 'list' && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>New Project</span>
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
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
          <Card className="border-0 shadow-lg text-center py-16">
            <CardContent>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
                <Briefcase className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters or search terms to find more projects
              </p>
              <Button 
                onClick={clearFilters}
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400"
              >
                <FilterX className="w-4 h-4 mr-2" />
                Clear All Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Can't find the right project? Create your own and let talented professionals come to you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/create-task')}
                  className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl"
                >
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Post a Project
                </Button>
                <Button 
                  size="lg"
                  variant="outline" 
                  onClick={() => navigate('/register')}
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm"
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