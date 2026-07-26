const MSTDesign = require('../models/MSTDesign');

// GET all designs for a user
const getAllDesigns = async (req, res) => {
  try {
    const designs = await MSTDesign.find({ userId: req.user.id });
    res.json(designs);
  } catch {
    res.status(500).json({ message: 'Failed to fetch designs' });
  }
};

// GET one design
const getDesignById = async (req, res) => {
  try {
    const design = await MSTDesign.findOne({ _id: req.params.id, userId: req.user.id });
    if (!design) return res.status(404).json({ message: 'Design not found' });
    res.json(design);
  } catch {
    res.status(500).json({ message: 'Failed to fetch design' });
  }
};

// POST create design
const createDesign = async (req, res) => {
  try {
    const { name, nodes, edges, computedMST } = req.body;
    console.log("REQ.USER:", req.user);
    console.log("BODY:", { name, nodes, edges, computedMST });

    const newDesign = await MSTDesign.create({
      userId: req.user.id,
      name,
      nodes,
      edges,
      computedMST // ✅ Add this to save the MST result
    });

    res.status(201).json(newDesign);
  } catch (err) {
    console.error("CREATE DESIGN ERROR:", err.message);
    res.status(400).json({ message: 'Failed to create design' });
  }
};



// PUT update design
const updateDesign = async (req, res) => {
  try {
    const { name, nodes, edges, computedMST } = req.body;
    const updated = await MSTDesign.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      {
        name,
        nodes,
        edges,
        ...(computedMST ? { computedMST } : {}),
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Design not found' });
    }

    res.json(updated);
  } catch (err) {
    console.error("UPDATE DESIGN ERROR:", err.message);
    res.status(400).json({ message: 'Failed to update design' });
  }
};

// POST run Prim's MST
const getMST = async (req, res) => {
  try {
    const design = await MSTDesign.findOne({ _id: req.params.id, userId: req.user.id });
    if (!design) return res.status(404).json({ error: 'Design not found' });

    const mstResult = runPrimsAlgorithm(design.nodes, design.edges);
    res.json({
      mst: mstResult.edges,
      cost: mstResult.totalCost,
    });
  } catch (err) {
    console.error("GET MST ERROR:", err.message);
    res.status(500).json({ message: 'Failed to compute MST' });
  }
};

// Build a minimum spanning tree from a saved design using Prim's algorithm.
function runPrimsAlgorithm(nodes, edges) {
  if (!Array.isArray(nodes) || !Array.isArray(edges) || nodes.length === 0) {
    return { edges: [], totalCost: 0 };
  }

  const indexById = new Map(nodes.map((node, index) => [node.id, index]));
  const adjacency = Array.from({ length: nodes.length }, () => []);

  for (const edge of edges) {
    const fromIndex = indexById.get(edge.from);
    const toIndex = indexById.get(edge.to);

    if (fromIndex === undefined || toIndex === undefined) {
      continue;
    }

    const weight = Number(edge.cost ?? 1);
    adjacency[fromIndex].push({ index: toIndex, weight });
    adjacency[toIndex].push({ index: fromIndex, weight });
  }

  const visited = Array(nodes.length).fill(false);
  const queue = [{ from: -1, to: 0, weight: 0 }];
  const mstEdges = [];

  while (queue.length > 0 && mstEdges.length < nodes.length - 1) {
    queue.sort((a, b) => a.weight - b.weight);
    const current = queue.shift();

    if (visited[current.to]) {
      continue;
    }

    visited[current.to] = true;

    if (current.from !== -1) {
      mstEdges.push({
        from: nodes[current.from].id,
        to: nodes[current.to].id,
        weight: current.weight,
      });
    }

    for (const neighbor of adjacency[current.to]) {
      if (!visited[neighbor.index]) {
        queue.push({
          from: current.to,
          to: neighbor.index,
          weight: neighbor.weight,
        });
      }
    }
  }

  const totalCost = mstEdges.reduce((sum, edge) => sum + edge.weight, 0);
  return { edges: mstEdges, totalCost };
}

module.exports = {
  getAllDesigns,
  getDesignById,
  createDesign,
  updateDesign,
  getMST
};
