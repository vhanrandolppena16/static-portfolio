// Skills Section Logo's
import ciscoLogo1 from './SkillsLogo/cisco.png'
import ciscoLogo2 from './SkillsLogo/cisco2.png'
import ciscoLogo3 from './SkillsLogo/cisco3.png'
import colabLogo from './SkillsLogo/colab.png'
import cppLogo from './SkillsLogo/cpp.png'
import cssLogo from './SkillsLogo/css.png'
import figmaLogo from './SkillsLogo/figma.png'
import firebaseLogo from './SkillsLogo/firebase.png'
import flaskLogo from './SkillsLogo/flask.png'
import gitLogo from './SkillsLogo/git.png'
import githubLogo from './SkillsLogo/github.png'
import htmlLogo from './SkillsLogo/html.png'
import javascriptLogo from './SkillsLogo/javascript.png'
import laravelLogo from './SkillsLogo/laravel.png'
import materialuiLogo from './SkillsLogo/materialui.png'
import matplotlibLogo from './SkillsLogo/matplotlib.png'
import mysqlLogo from './SkillsLogo/mysql.png'
import nodejsLogo from './SkillsLogo/nodejs.png'
import numpyLogo from './SkillsLogo/numpy.png'
import OpenCVLogo from './SkillsLogo/OpenCV.png'
import pandasLogo from './SkillsLogo/pandas.png'
import phpLogo from './SkillsLogo/php.svg'
import postmanLogo from './SkillsLogo/postman.png'
import pythonLogo from './SkillsLogo/python.png'
import reactjsLogo from './SkillsLogo/reactjs.png'
import scikitlearnLogo from './SkillsLogo/scikitlearn.png'
import tailwindcssLogo from './SkillsLogo/tailwindcss.png'
import tensorflowLogo from './SkillsLogo/tensorflow.png'
import typescriptLogo from './SkillsLogo/typescript.png'
import vercelLogo from './SkillsLogo/vercel.png'
import viteLogo from './SkillsLogo/vite.png'
import vscodeLogo from './SkillsLogo/vscode.png'

//<script async src="https://cse.google.com/cse.js?cx=f27e42017d546499b">
// </script>
// <div class="gcse-search"></div>D:\vrsp11603\Portfolio\portfolio-website\src\components\Skills\SkillsLogo\arduino.png

export const SkillsInfo = [
  {
    title: 'Frontend',
    categories: [
      {
        name: 'Core',
        skills: [
          { name: 'HTML', logo: htmlLogo },
          { name: 'CSS', logo: cssLogo },
          { name: 'JavaScript', logo: javascriptLogo },
          { name: 'TypeScript', logo: typescriptLogo },
        ],
      },
      {
        name: 'Frameworks & Libraries',
        skills: [
          { name: 'React JS', logo: reactjsLogo },
          { name: 'Tailwind CSS', logo: tailwindcssLogo },
          { name: 'Material UI', logo: materialuiLogo },
        ],
      },
      {
        name: 'Build Tools',
        skills: [
          { name: 'Vite', logo: viteLogo },
        ],
      },
    ],
  },
  {
    title: 'Backend',
    categories: [
      {
        name: 'Languages & Runtime',
        skills: [
          { name: 'Node.js', logo: nodejsLogo },
          { name: 'PHP', logo: phpLogo },
          { name: 'Python', logo: pythonLogo },
          { name: 'C++', logo: cppLogo },
        ],
      },
      {
        name: 'Frameworks',
        skills: [
          { name: 'Flask', logo: flaskLogo },
          { name: 'Laravel', logo: laravelLogo },
        ],
      },
      {
        name: 'Databases',
        skills: [
          { name: 'MySQL', logo: mysqlLogo },
        ],
      },
    ],
  },
  {
    title: 'Data Science & Machine Learning',
    categories: [
      {
        name: 'Data Analysis',
        skills: [
          { name: 'NumPy', logo: numpyLogo },
          { name: 'Pandas', logo: pandasLogo },
          { name: 'Matplotlib', logo: matplotlibLogo },
        ],
      },

      {
        name: 'Machine Learning',
        skills: [
          { name: 'Scikit-Learn', logo: scikitlearnLogo },

          { name: 'Classification Algorithms' },
          { name: 'Regression Algorithms' },
          { name: 'Support Vector Machine (SVM)' },
          { name: 'K-Means Clustering' },
          { name: 'Decision Trees' },
          { name: 'Random Forest' },
        ],
      },

      // {
      //   name: 'Machine Learning Workflow',
      //   skills: [
      //     { name: 'Data Preprocessing' },
      //     { name: 'Feature Engineering' },
      //     { name: 'Train / Validation / Test Split' },
      //     { name: 'Model Selection' },
      //     { name: 'Hyperparameter Tuning' },
      //     { name: 'Cross-Validation' },
      //     { name: 'Model Evaluation' },
      //     { name: 'Overfitting & Regularization' },
      //   ],
      // },
    ],
  },
  {
    title: 'Deep Learning & Computer Vision',
    categories: [
      {
        name: 'Deep Learning',
        skills: [
          { name: 'TensorFlow', logo: tensorflowLogo },

          { name: 'Convolutional Neural Networks (CNN)' },
          { name: 'Transfer Learning' },
          { name: 'Optimizers (SGD, Adam)' },
          { name: 'Batch Normalization' },
          { name: 'Regularization Techniques' },
          { name: 'Fine-Tuning Pretrained Models' },
        ],
      },

      {
        name: 'Computer Vision',
        skills: [
          { name: 'OpenCV', logo: OpenCVLogo },

          { name: 'Image Classification' },
          { name: 'Object Detection' },
          { name: 'Image Segmentation' },
          { name: 'OCR (Text Recognition)' },
          { name: 'Feature Extraction' },
        ],
      },
    ],
  },
  {
    title: 'Networking (CCNA)',
    categories: [
      {
        name: 'Introduction to Networks',
        skills: [
          { name: 'Basic Configuration', logo: ciscoLogo1 },
          { name: 'OSI Model', logo: ciscoLogo1 },
          { name: 'IP Addressing', logo: ciscoLogo1 },
        ]
      },
      {
        name: 'Switching, Routing, and Wireless Essentials',
        skills: [
          { name: 'Switching', logo: ciscoLogo2 },
          { name: 'VLANs', logo: ciscoLogo2 },
          { name: 'STP and EtherChannel', logo: ciscoLogo2 },
          { name: 'Routing', logo: ciscoLogo2 },
        ]
      },
      {
        name: 'Enterprise Networking, Security, and Automation',
        skills: [
          { name: 'Open Shortest Path First Routing', logo: ciscoLogo3 },
          { name: 'Access Control List', logo: ciscoLogo3 },
          { name: 'Network Address Translation', logo: ciscoLogo3 },
        ]
      }
    ]
  },
  {
    title: 'Tools & Platforms',
    categories: [
      {
        name: 'Version Control',
        skills: [
          { name: 'Git', logo: gitLogo },
          { name: 'GitHub', logo: githubLogo },
        ],
      },
      {
        name: 'Hosting & Deployment',
        skills: [
          { name: 'Vercel', logo: vercelLogo },
          { name: 'Firebase', logo: firebaseLogo },
        ],
      },
      {
        name: 'Development Tools',
        skills: [
          { name: 'VS Code', logo: vscodeLogo },
          { name: 'Postman', logo: postmanLogo },
        { name: 'Google Colab', logo: colabLogo },
        ],
      },
      {
        name: 'Design Tools',
        skills: [
          { name: 'Figma', logo: figmaLogo },
        ],
      },
    ],
  },
]