<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
<center><u><i><h1>My Movies Collection</h1></i></u></center>
<br><br><br></br></br>
</br>
<center><table border="2">
<tr bgcolor="Tomatored">
<th>Title</th>
<th>Category</th>
<th>Director</th>
<th>Writer</th>
<th>Verdict</th>
<th>Released</th>

</tr>
<xsl:for-each select="Movies/Movie">
<tr>
<td><xsl:value-of select="title"/></td>
<td><xsl:value-of select="category"/></td>
<td><xsl:value-of select="director"/></td>
<td><xsl:value-of select="writer"/></td>
<td><xsl:value-of select="verdict"/></td>
<td><xsl:value-of select="released"/></td>

</tr>
</xsl:for-each>
</table></center>
</body>
</html>
</xsl:template>
</xsl:stylesheet>