import { defineComponent } from 'vue';
import { Project } from '@/configTypes';
import { getURLParams } from '@/lib/util';

interface ProjectModalState {
  /**
   * if the modal is open or closed
   */
  isActive: boolean;
  /**
   * The name of the selected project 
   */
  activeProjectName: string;
}

/**
 * This mixin provides a controller for handling ProjectModalState.
 * 
 * See Projects.vue, Teams.vue for examples.
 */
export default defineComponent({
  props: {
    /**
     * Projects available for modal
     */
    projects: {
      type: Array as () => Project[],
      required: true,
    },
  },
  data: () => ({ isActive: false, activeProjectName: '0' }),
  computed: {
    activeProject(): Project | undefined {
      return this.getProjectByName(this.activeProjectName);
    },
  },
  created() {
    // jump to linked project if one is provided, AND if the project exists
    // this is used to handle the modal share links
    const linkedProject = getURLParams(window.location).get('project');
    if (linkedProject && this.getProjectByName(linkedProject)) {
      this.setModalState({
        isActive: true,
        activeProjectName: linkedProject,
      });
    }
  },
  methods: {
    getProjectByName(name: string): Project | undefined {
      return this.projects.find((project: Project) =>
        project.name.toLowerCase() === name.toLowerCase());
    },
    setModalState(state: ProjectModalState) {
      this.isActive = state.isActive;
      this.activeProjectName = state.activeProjectName;
    },
    closeModal() {
      this.isActive = false;
    },
  },
});
