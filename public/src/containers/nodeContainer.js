import { connect } from 'react-redux'
import Node from '../components/Node'
import {
  indentNode,
  unindentNode,
  createNode,
  collapseNode,
  uncollapseNode,
  moveUp,
  moveDown
} from '../actions/action'

const mapStateToProps = (state, ownProps) => {
  return {
    node: ownProps.node,
    nodes: state.nodes.nodes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    indentNode: (nodeId) => {
      dispatch(indentNode(nodeId))
    },
    unindentNode: (nodeId) => {
      dispatch(unindentNode(nodeId))
    },
    createNode: (nodeId, startOffset, endOffset) => {
      dispatch(createNode(nodeId, startOffset, endOffset))
    },
    onNodeClick: (e) => {
    },
    onNodeBlur: (e) => {
    },
    collapse: (nodeId) => {
      dispatch(collapseNode(nodeId))
    },
    uncollapse: (nodeId) => {
      dispatch(uncollapseNode(nodeId))
    },
    moveUp: (nodeId) => {
      dispatch(moveUp(nodeId))
    },
    moveDown: (nodeId) => {
      dispatch(moveDown(nodeId))
    },
  }
}

const NodeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Node)

export default NodeContainer
