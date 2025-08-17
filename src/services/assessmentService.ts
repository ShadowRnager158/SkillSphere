import { type AssessmentResult, type Certification, type SkillLevel, type User } from '@/types';

// Save assessment result to localStorage
export const saveAssessmentResult = (result: AssessmentResult): void => {
  try {
    const results = JSON.parse(localStorage.getItem('skillsphere_assessment_results') || '[]');
    results.push({
      ...result,
      id: crypto.randomUUID(),
      completedAt: new Date().toISOString()
    });
    localStorage.setItem('skillsphere_assessment_results', JSON.stringify(results));
  } catch (error) {
    console.error('Error saving assessment result:', error);
  }
};

// Get assessment results for a user
export const getUserAssessmentResults = (userId: string): AssessmentResult[] => {
  try {
    const results = JSON.parse(localStorage.getItem('skillsphere_assessment_results') || '[]');
    return results.filter((result: AssessmentResult) => result.userId === userId);
  } catch (error) {
    console.error('Error getting user assessment results:', error);
    return [];
  }
};

// Create certification from assessment result
export const createCertification = (result: AssessmentResult): Certification => {
  const certification: Certification = {
    id: crypto.randomUUID(),
    assessmentId: result.assessmentId,
    assessmentTitle: result.assessmentTitle,
    userId: result.userId,
    issuedAt: new Date(),
    expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year from now
    status: 'active',
    score: result.percentage,
    grade: result.grade
  };

  try {
    const certifications = JSON.parse(localStorage.getItem('skillsphere_certifications') || '[]');
    certifications.push(certification);
    localStorage.setItem('skillsphere_certifications', JSON.stringify(certifications));
  } catch (error) {
    console.error('Error saving certification:', error);
  }

  return certification;
};

// Get user certifications
export const getUserCertifications = (userId: string): Certification[] => {
  try {
    const certifications = JSON.parse(localStorage.getItem('skillsphere_certifications') || '[]');
    return certifications.filter((cert: Certification) => cert.userId === userId);
  } catch (error) {
    console.error('Error getting user certifications:', error);
    return [];
  }
};

// Update user skill levels based on assessment results
export const updateUserSkillLevels = (userId: string, assessmentResult: AssessmentResult): void => {
  try {
    const users = JSON.parse(localStorage.getItem('skillsphere_users') || '[]');
    const userIndex = users.findIndex((user: User) => user.id === userId);
    
    if (userIndex >= 0) {
      const user = users[userIndex];
      const skillLevels = user.skillLevels || {};
      
      // Update skill level based on assessment category and score
      skillLevels[assessmentResult.category] = assessmentResult.skillLevel;
      
      // Update user with new skill levels
      users[userIndex] = {
        ...user,
        skillLevels
      };
      
      localStorage.setItem('skillsphere_users', JSON.stringify(users));
      
      // Also update current user in localStorage if it's the same user
      const currentUser = localStorage.getItem('skillsphere_user');
      if (currentUser) {
        const parsedUser = JSON.parse(currentUser);
        if (parsedUser.id === userId) {
          localStorage.setItem('skillsphere_user', JSON.stringify({
            ...parsedUser,
            skillLevels
          }));
        }
      }
    }
  } catch (error) {
    console.error('Error updating user skill levels:', error);
  }
};

// Get user skill levels
export const getUserSkillLevels = (userId: string): { [skill: string]: string } => {
  try {
    const users = JSON.parse(localStorage.getItem('skillsphere_users') || '[]');
    const user = users.find((u: User) => u.id === userId);
    return user?.skillLevels || {};
  } catch (error) {
    console.error('Error getting user skill levels:', error);
    return {};
  }
};

// Get assessment statistics for a user
export const getUserAssessmentStats = (userId: string) => {
  try {
    const results = getUserAssessmentResults(userId);
    const certifications = getUserCertifications(userId);
    
    return {
      totalAssessments: results.length,
      passedAssessments: results.filter(r => r.passed).length,
      averageScore: results.length > 0 
        ? results.reduce((sum, r) => sum + r.percentage, 0) / results.length 
        : 0,
      totalCertifications: certifications.length,
      activeCertifications: certifications.filter(c => c.status === 'active').length,
      skillsAssessed: [...new Set(results.map(r => r.category))]
    };
  } catch (error) {
    console.error('Error getting user assessment stats:', error);
    return {
      totalAssessments: 0,
      passedAssessments: 0,
      averageScore: 0,
      totalCertifications: 0,
      activeCertifications: 0,
      skillsAssessed: []
    };
  }
};